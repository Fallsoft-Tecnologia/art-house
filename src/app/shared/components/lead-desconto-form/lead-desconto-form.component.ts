import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from 'src/app/core/services/lead.service';
import { LeadDescontoForm } from '../../models/leadDescontoForm';
import { NotificacaoService, TipoNotificacao } from '../notificacao/notificacao.service';

@Component({
  selector: 'app-lead-desconto-form',
  templateUrl: './lead-desconto-form.component.html',
  styleUrls: ['./lead-desconto-form.component.css']
})
export class LeadDescontoFormComponent implements OnInit {
  leadDescontoForm: FormGroup = new FormGroup({});
  successMessage: string = 'Seu cadastro foi realizado com sucesso!';
  errorMessage: string = 'Seu cadastro falhou!';

  constructor(private fb: FormBuilder, private leadService: LeadService, private notificacaoService: NotificacaoService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.leadDescontoForm = this.fb.group({
      email: ['', [Validators.email]],
      celular: ['']
    });
  }

  cadastrar() {
    const celularValue = this.leadDescontoForm.get('celular')?.value.replace(/\D/g, '');
    
    if (this.leadDescontoForm.get("email")?.value || this.leadDescontoForm.get('celular')?.value) {
      if (this.leadDescontoForm.valid) {
        const leadDesconto: LeadDescontoForm = {
          email: this.leadDescontoForm.get('email')?.value,
          celular: celularValue
        };
  
        this.leadService.createLead(leadDesconto).subscribe({
          next: () => {
            this.notificacaoService.mostrarNotificacao(this.successMessage, TipoNotificacao.Sucesso);
            this.leadDescontoForm.reset();
          },
          error: (error) => {
            this.notificacaoService.mostrarNotificacao(this.errorMessage, TipoNotificacao.Erro);
            console.error('Erro ao cadastrar o lead:', error);
          }
        });
      } else {
        this.notificacaoService.mostrarNotificacao(this.errorMessage, TipoNotificacao.Erro);
      }
    } else {
      this.notificacaoService.mostrarNotificacao(`${this.errorMessage} Preencha pelo menos um dos campos (email ou celular).`, TipoNotificacao.Erro);
      console.log('Preencha pelo menos um dos campos (email ou celular).');
    }
  }
}
