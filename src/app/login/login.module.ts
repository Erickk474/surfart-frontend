import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [EntrarComponent, RegistrarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
