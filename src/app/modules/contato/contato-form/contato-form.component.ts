import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { NotificacaoService, TipoNotificacao } from 'src/app/shared/components/notificacao/notificacao.service';
import { LeadMensagemForm } from 'src/app/shared/models/leadMensagemForm';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent {

  mensagemForm: FormGroup = new FormGroup({});
  formEnviado = false;

  isLoading:boolean = false;

  constructor(
    private fb: FormBuilder,
    private mensagemService: MensagemService,
    private notificacaoService: NotificacaoService
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.mensagemForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      celular: [''],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    this.formEnviado = true;
    
    if (this.mensagemForm.valid) {
      const leadMensagemForm = this.getLeadMensagemForm();
      this.enviarMensagem(leadMensagemForm);
    }
  }

  getLeadMensagemForm(): LeadMensagemForm {
    const { nome, email, celular, assunto, mensagem } = this.mensagemForm.value;
    return {
      nome,
      email,
      celular: this.removerMascaraCelular(celular),
      assunto,
      mensagem,
    };
  }

  private enviarMensagem(leadMensagemForm: LeadMensagemForm): void {
    this.mensagemService.enviarMensagem(leadMensagemForm).subscribe({
      next: (response) => this.handleSuccess(response),
      error: (error) => this.handleError(error),
    });
  }

  private removerMascaraCelular(celular: string | undefined): string | undefined {
    return celular ? celular.replace(/\D/g, '') : undefined;
  }

  isCampoInvalido(campo: string): boolean {
    const controle = this.mensagemForm.get(campo);
    return !!controle && controle.invalid && (controle.touched || this.formEnviado);
  }

  campoTocado(campo: string): boolean {
    const controle = this.mensagemForm.get(campo);
    return !!controle && (controle.touched || this.formEnviado);
  }

  private handleSuccess(response: any): void {
    this.notificacaoService.mostrarNotificacao('Mensagem enviada com sucesso.', TipoNotificacao.Sucesso);
    this.mensagemForm.reset();
    this.formEnviado = false;
    this.isLoading = false;
  }

  private handleError(error: any): void {
    this.isLoading = false;
    this.notificacaoService.mostrarNotificacao('Erro ao enviar mensagem. Por favor, tente novamente.', TipoNotificacao.Erro);
    console.error('Erro ao enviar mensagem:', error);
    
  }
}
