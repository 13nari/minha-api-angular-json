import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //8 - Importando HttpClient
import { Observable } from 'rxjs';
import { PessoaModel } from './pessoas/pessoa.model';
//3 - Criando o servico que sera importado no construtor de pessoas.component.ts
@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { } /*7 - Importando no construtor o modulo HttpClient que será
                                                  utilizado para realizar as chamadas http */
  listarPessoas(): Observable<any>{
    return this.http.get("http://localhost:3000/alunos/"); //9 - Servico GET que retorna um Observable
  }

  cadastrarPessoa(pessoa: PessoaModel): Observable<any>{
    return this.http.post("http://localhost:3000/alunos/", pessoa);
  }

}
