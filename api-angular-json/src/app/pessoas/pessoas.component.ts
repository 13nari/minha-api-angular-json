import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { PessoaModel } from './pessoa.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.sass']
})
export class PessoasComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel(); //19 - Instanciando uma pessoa de pessoa.model.ts
  pessoas: Array<any> = new Array(); //1 - Recebe retorno da chamada da api

  constructor(private pessoasService: PessoasService) { } /*4 - Servico pessoas sendo importado 
                                                                no construtor. Tambem será importado
                                                                no app.module e colocado como um provider */
  ngOnInit() {
    this.listarPessoas();//2 - Chamado na inicializacao da tela
  }

  cadastrar() { //21 - Funcao de cadastro de pessoas
    console.log(this.pessoa);
    this.pessoasService.cadastrarPessoa(this.pessoa).subscribe(pessoa => {
      this.pessoa = new PessoaModel(); //25 - Limpa os campos para o proximo cadastro
      this.listarPessoas(); //26 - Atualiza o grid assim que cadastrar
    }, err => {
      console.log('Erro ao cadastrar pessoa', err)
    })
  }

  listarPessoas() { //13 - Retorna pessoas
    this.pessoasService.listarPessoas().subscribe(
      pessoas => {
        this.pessoas = pessoas;
      },
      err => {
        console.log('Erro ao listar as pessoas', err);
      }
    )
  }

  atualizar(id: number) {  //27
    this.pessoasService.atualizarPessoa(id, this.pessoa).subscribe(pessoa => {
      this.pessoa = new PessoaModel(); //25 - Limpa os campos para o proximo cadastro
      this.listarPessoas(); //26 - Atualiza o grid assim que cadastrar
    }, err => {
      console.log('Erro ao atualizar a pessoa', err)
    })
  }

  remover(id: number) {
    this.pessoasService.removerPessoa(id).subscribe(pessoa => {
      this.pessoa = new PessoaModel(); //25 - Limpa os campos para o proximo cadastro
      this.listarPessoas(); //26 - Atualiza o grid assim que cadastrar
    }, err => {
      console.log('Erro ao remover a pessoa', err)
    })
  }

}