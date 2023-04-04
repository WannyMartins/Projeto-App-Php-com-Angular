import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url : string = "http://localhost/api/php/";
 
  vetor: Curso[] = [];

  constructor(private http: HttpClient) {
    
   }
   

  obterCursos(): Observable<Curso[]>{
    return this.http.get(this.url + 'listar').pipe(
      map((res: any) => {
        this.vetor = res['cursos'];
        return this.vetor
      })
    )
  }

  cadastrarCursos(c: Curso): Observable<Curso[]>{
    return this.http.post(this.url + 'cadastrar', {cursos: c})
    .pipe(
      map((res: any) => {
        this.vetor.push(res['cursos']);
        return this.vetor
      })
    )
  }

  removerCurso(c: Curso): Observable<Curso[]>{
    const params = new HttpParams().set("idCurso", c.idCurso!.toString())
    return this.http.post(this.url + 'excluir', {params: params})
    .pipe(
      map((res: any) => {
        const filtro = this.vetor.filter((curso) => {
          return +curso['idCurso']! !== +c.idCurso!;
        })
        
        return this.vetor = filtro;
      })
    )
  }

  alterarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post(this.url + 'alterar', {cursos: c})
    .pipe(
      map((res: any) => {
        const cursoAlterado = this.vetor.find((curso) => +curso['idCurso']! === +['idCurso']!)
        if(cursoAlterado){
          cursoAlterado['nomeCurso'] = c['nomeCurso'];
          cursoAlterado['valorCurso'] = c['valorCurso'];
        }
       
        return this.vetor
      })
    )
  }

}
