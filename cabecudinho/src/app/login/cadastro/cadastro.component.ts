import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import { Http } from "@angular/http";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  confirmPassword = false;
  cliente: FormGroup;
  public innerWidth: any;
  account_validation_messages = {
    'login': [
      { type: 'required', message: 'Login é obritatório ' },
      { type: 'minlength', message: 'Login precisa ter pelo menos 5 caracteres' },
      { type: 'maxlength', message: 'Login não pode ser maior que 25 caracteres' },
      { type: 'pattern', message: ' Login só pode conter letras e numeros' },
      { type: 'validUsername', message: 'Login em uso' }
    ],
    'nome': [
      { type: 'required', message: 'Nome é obrigatório '},
      { type: 'minlength', message: 'Seu nome precisa ter pelo menos 5 caracteres' },
      { type: 'maxlength', message: 'Seu nome não pode ser maior que 25 caracteres' },
      { type: 'pattern', message: 'Seu nome só pode conter letras e numeros' }
    ],
    'email': [
      { type: 'required', message: 'Email é Obrigatório' },
      { type: 'pattern', message: 'Por favor coloque um email valido' }
    ],
    'confirm-password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Senha é obrigatório' },
      { type: 'minlength', message: 'Senha precisa ter pelo menos 5 caracteres' },
      { type: 'pattern', message: 'Sua senha precisa ter um Numero e uma letra Maiúscula' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  navigateLogin(){
    this.router.navigate(['/login']);
  }

  constructor(
      private router: Router,
      private formbuilder: FormBuilder,
      private http: Http
  ) {
    this.cliente = this.formbuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],
      email: [null, Validators.required],
      nome: [null, Validators.required],
      tos: [null, Validators.required]
    });
  }

log(x) {
    console.log(x)
}

  onSubmit() {

    if(this.cliente.invalid){
      return;
    }else{
      this.http.post('http://localhost:3000/new-user', this.cliente.value).subscribe(dados => console.log(dados));
    }

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

}
