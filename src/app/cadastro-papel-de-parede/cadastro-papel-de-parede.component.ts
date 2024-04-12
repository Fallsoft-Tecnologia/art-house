import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  cores: { idCor: number, nomeCor: string, imgCor: Uint8Array }[] = [];
  caracteristicas: { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[] = [];
  status : {idStatusProduto: number, nomeStatusProduto: string}[] = [];
  tipos: {idTipoProduto: number, nomeTipoProduto: string}[] = [];
  

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
      caracteristicasProduto: ['', Validators.required],
      coresProduto: ['', Validators.required],
      statusProduto: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregarCoresEcaracteristicas();
  }
  onSubmit(): void {
    this.formEnviado = true;
    const tipoProduto = this.produtoForm.get('tipoProduto')?.value;
    
      const caracteristicasProduto = this.produtoForm.get('caracteristicasProduto')?.value;
      const coresProduto = this.produtoForm.get('coresProduto')?.value;
      const statusProduto = this.produtoForm.get('statusProduto')?.value;
      const descricao = this.produtoForm.get('descricao')?.value;

      console.log(tipoProduto);
      console.log(coresProduto)

    if (this.produtoForm.valid) {
      
      
     
        
    
      }
    }
  

  private handleSuccess(response: any): void {
    this.notificacaoService.mostrarNotificacao('Mensagem enviada com sucesso.', TipoNotificacao.Sucesso);
    this.produtoForm.reset();
    this.formEnviado = false;
  }

  private handleError(error: any): void {
    this.notificacaoService.mostrarNotificacao('Erro ao enviar mensagem. Por favor, tente novamente.', TipoNotificacao.Erro);
    console.error('Erro ao enviar mensagem:', error);
  }

  carregarCoresEcaracteristicas() {
    this.cadastroService.listarCores().subscribe(data => {
      this.cores = data as { idCor: number, nomeCor: string, imgCor: Uint8Array }[];
    });
  
    this.cadastroService.listarCaracteristicas().subscribe(data => {
      this.caracteristicas = data as { idCaracteristicas: number, nomeCaracterisiticas: string, imgCaracteristicas: Uint8Array }[];
    });

    this.cadastroService.listarStatusProduto().subscribe(data =>{
      this.status = data as {idStatusProduto: number, nomeStatusProduto: string}[];
    })

    this.cadastroService.listarTipoProduto().subscribe(data =>{
      this.tipos = data as {idTipoProduto: number, nomeTipoProduto: string}[];
    })
  }
}
