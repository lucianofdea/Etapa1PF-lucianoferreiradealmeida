import { Cursos } from '../../../../shared/interfaces/cursos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  ListaCursos: Cursos[] = [
    {id: 1, cursoNombre: "Node.JS", cursoDias:"martes y jueves", precio: 40000, profesor: "Jorge Barcinilla", detalle:"Curso de node"},
    {id: 1, cursoNombre: "Angular", cursoDias:"lunes y miércoles", precio: 35000, profesor: "Alfredo Leuco", detalle:"Curso de angular"},
    {id: 1, cursoNombre: "Vue.Js", cursoDias:"viernes y sábado", precio: 30000, profesor: "Agusto Silvestre", detalle:"Curso de Vue"},
    {id: 1, cursoNombre: "UX/UI", cursoDias:"sábado", precio: 300000, profesor: "Luis Novaresio", detalle:"Curso de Ux/Ui"},
    {id: 1, cursoNombre: "Node.JS", cursoDias:"martes y jueves", precio: 40000, profesor: "Jorge Barcinilla", detalle:"Curso de node"},
    {id: 1, cursoNombre: "Angular", cursoDias:"lunes y miércoles", precio: 35000, profesor: "Alfredo Leuco", detalle:"Curso de angular"},
    {id: 1, cursoNombre: "Vue.Js", cursoDias:"viernes y sábado", precio: 30000, profesor: "Agusto Silvestre", detalle:"Curso de Vue"},
    {id: 1, cursoNombre: "UX/UI", cursoDias:"sábado", precio: 300000, profesor: "Luis Novaresio", detalle:"Curso de Ux/Ui"},
  ];
  constructor() { }

  getCursos(){
    return this.ListaCursos.slice();
  }

  eliminarCursos(index: number){
    this.ListaCursos.splice(index, 1);
  }

  editarCursos(curso: Cursos){
      const index = this.ListaCursos.findIndex(c => c.id === curso.id)
      this.ListaCursos[index] = curso;
  }

  agregarCursos(curso: Cursos){
    this.ListaCursos.unshift(curso);

  }  
  
}
