import { Component } from '@angular/core';
import { LeadService } from '../services/lead.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/shared/models/Lead';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  cadastroForm: FormGroup = new FormGroup({});
  cadastroSucesso = false;

  constructor(private fb: FormBuilder, private leadService: LeadService) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cadastroForm = this.fb.group({
      email: [null, [Validators.email]],
      whatsapp: [null, [Validators.pattern(/^[0-9]*$/)]],
    });
  }

  cadastrar() {
    if (this.cadastroForm.valid) {
      const leadData: Lead = {
        nome: undefined,
        dataHoraCriacao: undefined,
        dataHoraAlteracao: undefined,
        contato: [{
          email: this.cadastroForm.value.email,
          celular: this.cadastroForm.value.whatsapp,
          dataHoraCriacao: undefined,
          dataHoraAlteracao: undefined,
        }],
      };
  
      this.leadService.createLead(leadData).subscribe({
        next: (result) => {
          console.log('Lead cadastrado com sucesso:', result);
          this.cadastroForm.reset();
          this.cadastroSucesso = true;
          setTimeout(() => {
            this.cadastroSucesso = false;
          }, 5000);
        },
        error: (error) => {
          console.error('Erro ao cadastrar o lead:', error);
        }
      });
    }
  }
}
