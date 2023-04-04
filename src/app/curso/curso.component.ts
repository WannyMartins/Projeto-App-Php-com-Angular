import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  vetor: Curso[] = [];

  curso = new Curso();

  
  constructor(private cursoService: CursoService,
   
    ){
      
     }

  ngOnInit(): void {
    this.selecao();
   
  }

  selecao(){
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        
        this.vetor = res;
      }
    )
  }
/*
  cadastro(c: Curso){
    this.cursoService.cadastrarCursos(c).subscribe(
      (res) => {
        this.vetor = res;
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        this.selecao();
      }

    )
  }

 

  alterar(c: Curso){
    this.cursoService.alterarCurso(c).subscribe(
      (res) =>{
        this.vetor = res;
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        this.selecao();
      }
    )

  }

  remover(c: Curso){
    this.cursoService.removerCurso(c).subscribe(
      (res) => {
        this.vetor = res;
        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
        this.selecao();
      }
    )
  }

  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }

  */
}
