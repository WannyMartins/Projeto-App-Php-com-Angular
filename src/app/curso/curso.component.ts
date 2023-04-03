import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  vetor: Curso[] | any;

  curso = new Curso();

  constructor(private cursoService: CursoService,
   
    ){ }

  ngOnInit(): void {
    this.selecao();
  }

  cadastro(c: Curso){
    this.cursoService.cadastrarCursos(c).subscribe(
      (res) => {
        this.vetor = res;
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        this.selecao();
      }

    )
  }

  selecao(){
    this.cursoService.obterCursos().subscribe(
      (res) => {
        this.vetor = res;
      }
    )
  }

  alterar(c: Curso){
    this.cursoService.alterarCurso(c).subscribe(
      (res) =>{
        this.vetor = res;
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        this.selecao();
      }
    )

  }

  remover(c: Curso){
    this.cursoService.removerCurso(c).subscribe(
      (res) => {
        this.vetor = res;
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        this.selecao();
      }
    )
  }

  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }
}
