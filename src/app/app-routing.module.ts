import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicosComponent } from '../servicos/servicos.component';
import { LoginComponent } from './login/login.component';
import { CadastroClientesComponent } from './cadastro-cliente/cadastro-cliente.component';
//import { Pagina1Component } from './pagina1/pagina1.component';
//import { Pagina2Component } from './pagina2/pagina2.component';

const routes: Routes = [
{ path: '', redirectTo: '/servicos', pathMatch: 'full' },
{ path: 'servicos', component: ServicosComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroClientesComponent }



];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}