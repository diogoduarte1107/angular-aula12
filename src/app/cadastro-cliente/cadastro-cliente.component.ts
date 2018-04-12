import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClientesComponent implements OnInit {
  //importar o ReactiveFormsModule
  
  formGroup : FormGroup;

  constructor( private formBuiler: FormBuilder, private clienteService : ClienteService) {
    this.formGroup = this.formBuiler.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      datanascimento : ['', [Validators.required,]],
      senha : ['', [Validators.required,]]
    })
   
  }
    
  ngOnInit() {
  }

  cadastrar(){
    this.clienteService.insert(this.formGroup.value)
     .subscribe(response => {
    console.log("Cadastro com sucesso");
  }, error => {
    console.log("Erro ao cadastrar");
  })

  console.log(this.formGroup.value);

}
}