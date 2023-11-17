import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from 'src/app/core/services/lead.service';
import { LeadDescontoForm } from '../../models/leadDescontoForm';
import { NotificacaoSucessoService } from '../notificacao-sucesso/notificacao-sucesso.service';

@Component({
  selector: 'app-lead-desconto-form',
  templateUrl: './lead-desconto-form.component.html',
  styleUrls: ['./lead-desconto-form.component.css']
})
export class LeadDescontoFormComponent implements OnInit {
  leadDescontoForm: FormGroup = new FormGroup({});
  successMessage: string = 'Seu cadastro foi realizado com sucesso!';

  constructor(private fb: FormBuilder, private leadService: LeadService, private notificacaoService: NotificacaoSucessoService) {}

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
            this.leadDescontoForm.reset();
            this.notificacaoService.mostrarNotificacao(this.successMessage);
          },
          error: (error) => {
            console.error('Erro ao cadastrar o lead:', error);
          }
        });
      }
    } else {
      console.log('Preencha pelo menos um dos campos (email ou celular).');
    }
  }
}
