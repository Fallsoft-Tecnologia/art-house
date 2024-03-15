import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificacaoService, TipoNotificacao } from '../shared/components/notificacao/notificacao.service';
import { Produto } from '../shared/models/produto';
import { CadastroService } from '../core/services/cadastro.service';

@Component({
  selector: 'app-cadastro-papel-de-parede',
  templateUrl: './cadastro-papel-de-parede.component.html',
  styleUrls: ['./cadastro-papel-de-parede.component.css']
})
export class CadastroPapelDeParedeComponent {

  produtoForm: FormGroup = new FormGroup({});
  formEnviado = false;

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

  onSubmit(): void {
    if (this.produtoForm.valid) {
      const produtoData = this.produtoForm.value as Produto;
      this.cadastroService.cadastrarProduto(produtoData).subscribe({
        next: (response: any) => this.handleSuccess(response),
        error: (error: any) => this.handleError(error),
      });
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
}
