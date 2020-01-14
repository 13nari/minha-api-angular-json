import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './pessoas/pessoas.component';

import {PessoasService} from './pessoas.service'; //5 - Importando o servico pessoas
import {HttpClientModule} from '@angular/common/http' //10 - Gerencia os modulos http de forma global
import {FormsModule} from '@angular/forms' //22 - Importando FormsModule

@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //23 - Importar
    HttpClientModule //11 - Importar
  ],
  providers: [PessoasService, HttpClientModule], //6 - Colocando PessoasService como provider
                                                //12 - Colocando HttpClientModule como provider
  bootstrap: [AppComponent]
})
export class AppModule { }
