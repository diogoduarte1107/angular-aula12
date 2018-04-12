import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ClienteComponent } from './cliente/cliente.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { LoginService } from './services/login.service';
import { CadastroCadastroService } from './services/cadastro-cliente.service';
import { ServicosService } from './services/servicos.service';
import { ServicosComponent } from '../servicos/servicos.component';
import { CadastroClientesComponent } from './cadastro-cliente/cadastro-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    ServicosComponent,
    CadastroClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [ClienteService, LoginService, CadastroCadastroService, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
