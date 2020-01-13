import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoaModel } from './pessoas/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  listarPessoas(): Observable<any>{
    return this.http.get("http://localhost:3000/alunos/");
  }

  cadastrarPessoa(pessoa: PessoaModel): Observable<any>{
    return this.http.post("http://localhost:3000/alunos/", pessoa);
  }

}
