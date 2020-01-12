import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.sass']
})
export class PessoasComponent implements OnInit {

  pessoas: Array<any> = new Array();

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.listarPessoas();
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