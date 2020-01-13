import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { PessoaModel } from './pessoa.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.sass']
})
export class PessoasComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel();
  pessoas: Array<any> = new Array();

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.listarPessoas();
  }

  cadastrar() {
    console.log(this.pessoa);
    this.pessoasService.cadastrarPessoa(this.pessoa).subscribe(pessoa => {
      this.pessoa = new PessoaModel();
      this.listarPessoas(); //atualiza o grid assim que cadastrar
    }, err => {
      console.log('Erro ao cadastrar pessoa', err)
    })
  }

  listarPessoas() {
    this.pessoasService.listarPessoas().subscribe(
      pessoas => {
        this.pessoas = pessoas;
      },
      err => {
        console.log('Erro ao listar as pessoas', err);
      }
    )
  }
}