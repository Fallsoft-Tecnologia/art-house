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
  successMessage = 'Seu cadastro foi realizado com sucesso!';
  errorMessage = 'Seu cadastro falhou!';
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    private notificacaoService: NotificacaoService
  ) { }

  isLoading : boolean = false
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
    this.isLoading = true;
    this.submitted = true;

    if (this.leadDescontoForm.valid && this.atLeastOneRequired('email', 'celular')) {
      const celularValue = this.leadDescontoForm.get('celular')?.value.replace(/\D/g, '');

      const leadDesconto: LeadDescontoForm = {
        email: this.leadDescontoForm.get('email')?.value,
        celular: celularValue
      };

      this.leadService.createLead(leadDesconto).subscribe({
        next: () => {
          this.handleSuccess();
        },
        error: (error) => {
          this.handleError(error);
        }
      });
    } else {
      this.notificacaoService.mostrarNotificacao(this.errorMessage, TipoNotificacao.Erro);
      this.isLoading = false;
    }
  }

  isCampoInvalido(campo: string): boolean {
    const controle = this.leadDescontoForm.get(campo);
    return !!controle && (controle.invalid || (this.submitted && controle.pristine));
  }

  private atLeastOneRequired(...controlNames: string[]) {
    const controls = controlNames.map(name => this.leadDescontoForm.controls[name]);
    return controls.some(control => !!control.value);
  }

  private handleSuccess() {
    this.notificacaoService.mostrarNotificacao(this.successMessage, TipoNotificacao.Sucesso);
    this.leadDescontoForm.reset();
    this.submitted = false;
    this.isLoading = false;
  }

  private handleError(error: any) {
    this.isLoading = false;
    this.notificacaoService.mostrarNotificacao(this.errorMessage, TipoNotificacao.Erro);
    console.error('Erro ao cadastrar o lead:', error);
    
  }
}
