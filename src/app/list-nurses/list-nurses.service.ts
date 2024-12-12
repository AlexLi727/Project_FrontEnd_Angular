import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NursesService {
 

  constructor() {}

  obtenerNurses() {
    return this.nurses; // Retorna el JSON completo
  }
}
