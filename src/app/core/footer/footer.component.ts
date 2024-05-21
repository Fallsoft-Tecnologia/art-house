import { Component } from '@angular/core';
import { LeadService } from '../services/lead.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadDescontoForm } from 'src/app/shared/models/leadDescontoForm';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anoAtual = new Date().getFullYear();
  leadDescontoForm: FormGroup = new FormGroup({});
  cadastroSucesso = false;

  constructor(private fb: FormBuilder, private leadService: LeadService) {}

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
    if (this.leadDescontoForm.valid) {
      const leadDesconto: LeadDescontoForm = this.leadDescontoForm.getRawValue();
      console.log(leadDesconto);
  
      this.leadService.createLead(leadDesconto).subscribe({
        next: () => {
          this.leadDescontoForm.reset();
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
