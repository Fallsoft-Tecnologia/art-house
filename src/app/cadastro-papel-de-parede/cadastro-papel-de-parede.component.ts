import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacaoService, TipoNotificacao } from '../shared/components/notificacao/notificacao.service';
import { Produto } from '../shared/models/produto';
import { CadastroService } from '../core/services/cadastro.service';

@Component({
  selector: 'app-cadastro-papel-de-parede',
  templateUrl: './cadastro-papel-de-parede.component.html',
  styleUrls: ['./cadastro-papel-de-parede.component.css']
})
export class CadastroPapelDeParedeComponent implements OnInit{

  produtoForm: FormGroup = new FormGroup({});
  formEnviado = false;
  isLoading: boolean = false;


  cores: { idCor: number, nomeCor: string }[] = [];
  caracteristicas: { idCaracteristicas: number, nomeCaracterisiticas: string}[] = [];
  status : {idStatusProduto: number, nomeStatusProduto: string}[] = [];
  tipos: {idTipoProduto: number, nomeTipoProduto: string}[] = [];
  
  arquivoSelecionado: File | null = null; // Variável para armazenar o arquivo selecionado

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService,
    private notificacaoService: NotificacaoService
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.produtoForm = this.fb.group({
      tipoProduto: ['', Validators.required],
      caracteristicasProduto: this.fb.array([]),
      coresProduto: this.fb.array([]), // inicialize como um FormArray vazio
      statusProduto: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregarCoresEcaracteristicas();


  }
  onSubmit(): void {
    this.isLoading = true;
    this.formEnviado = true;
      const tipoProduto = this.produtoForm.get('tipoProduto')?.value;
      const bolleanCaracteristicasProduto = this.produtoForm.get('caracteristicasProduto')?.value;
      const bolleanCoresProduto = this.produtoForm.get('coresProduto')?.value;
      const statusProduto = this.produtoForm.get('statusProduto')?.value;
      const descricao = this.produtoForm.get('descricao')?.value;

      const coresProduto = this.encontrarNomesParametros(bolleanCoresProduto, this.cores.map(cor => cor.nomeCor));
      const caracteristicasProduto = this.encontrarNomesParametros(bolleanCaracteristicasProduto, this.caracteristicas.map(caracteristica => caracteristica.nomeCaracterisiticas));

      if (this.produtoForm.valid && this.arquivoSelecionado) { // Verifica se um arquivo foi selecionado
        // Criar um objeto Produto com os valores do formulário
        const produto: Produto = {
          tipoProduto,
          caracteristicasProduto,
          coresProduto,
          statusProduto,
          descricao
        };
  
        // Enviar o produto e o arquivo anexo para o serviço
        this.cadastroService.cadastrarProduto(produto, this.arquivoSelecionado).subscribe(
          () => {
            this.isLoading = false
            this.resetForm();
            this.arquivoSelecionado = null;
            this.handleSuccess("Produto cadastrado com sucesso"); // Tratar sucesso
           
          },
          (error) => {
            this.isLoading = false
            this.handleError(error); // Tratar erro
            // Limpar o formulário e o arquivo

          }
          
        );
      }else{
        this.isLoading = false;
      }

    }
  
    onFileSelected(event: any): void {
      this.arquivoSelecionado = event.target.files[0]; // Captura o arquivo selecionado
    }

  private handleSuccess(response: any): void {
    this.notificacaoService.mostrarNotificacao(response, TipoNotificacao.Sucesso);
    this.produtoForm.reset();
    this.resetForm()
    this.formEnviado = false;
  }

  private handleError(error: any): void {
    this.notificacaoService.mostrarNotificacao('Erro ao enviar mensagem. Por favor, tente novamente.', TipoNotificacao.Erro);
    console.error('Erro ao enviar mensagem:', error);
  }

  carregarCoresEcaracteristicas(): void {
    this.isLoading = true; // Define isLoading como true para mostrar o indicador de loading

    this.cadastroService.listarCores().subscribe(data => {
      if (Array.isArray(data)) {
          const coresFormArray = this.produtoForm.get('coresProduto') as FormArray;
          data.forEach(cor => {
              coresFormArray.push(this.fb.control(false)); 
          });
          this.cores = data as { idCor: number, nomeCor: string }[];
      } else {
        console.error('Erro ao carregar cores: os dados recebidos não são um array.');
      }
      this.isLoading = false; // Define isLoading como false quando a solicitação HTTP é concluída
    });

    this.cadastroService.listarCaracteristicas().subscribe(data => {
      if (Array.isArray(data)) {
        const caracteristicasFormArray = this.produtoForm.get('caracteristicasProduto') as FormArray;
        data.forEach(caracteristicas => {
          caracteristicasFormArray.push(this.fb.control(false)); 
        });
        this.caracteristicas = data as { idCaracteristicas: number, nomeCaracterisiticas: string }[];
      } else {
        console.error('Erro ao carregar caracteristicas : os dados recebidos não são um array.');
      }
      this.isLoading = false; // Define isLoading como false quando a solicitação HTTP é concluída
    });

    this.cadastroService.listarStatusProduto().subscribe(data => {
      this.status = data as {idStatusProduto: number, nomeStatusProduto: string}[];
      this.isLoading = false; // Define isLoading como false quando a solicitação HTTP é concluída
    });

    this.cadastroService.listarTipoProduto().subscribe(data => {
      this.tipos = data as {idTipoProduto: number, nomeTipoProduto: string}[];
      this.isLoading = false; // Define isLoading como false quando a solicitação HTTP é concluída
    });
  }

   encontrarNomesParametros(valores: boolean[], nomes: string[]): string[] {
    const nomesParametros: string[] = [];
    for (let i = 0; i < valores.length; i++) {
        if (valores[i]) {
            nomesParametros.push(nomes[i]);
        }
    }
    return nomesParametros;
}

private resetForm(): void {
  this.arquivoSelecionado = null;
  this.formEnviado = false;
  // Limpar o campo de arquivo
  const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  if (fileInput) {
    fileInput.value = '';
  }
}

}
