import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensagemService } from 'src/app/core/services/mensagem.service';
import { LeadMensagemForm } from 'src/app/shared/models/leadMensagemForm';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent {

  mensagemForm: FormGroup;

  constructor(private fb: FormBuilder, private mensagemService: MensagemService) {
    this.mensagemForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      celular: [''],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit() {
    const leadMensagemForm: LeadMensagemForm = {
      nome: this.mensagemForm.value.nome,
      email: this.mensagemForm.value.email,
      celular: this.mensagemForm.value.celular,
      assunto: this.mensagemForm.value.assunto,
      mensagem: this.mensagemForm.value.mensagem,
    };

    this.mensagemService.enviarMensagem(leadMensagemForm).subscribe({
      next: (response) => {
        // Mensagem enviada com sucesso, faça o que precisar aqui
      },
      error: (error) => {
        console.error('Erro ao enviar mensagem:', error);
        // Trate o erro conforme necessário
      }
    });
  }

}
