import { Cuidados } from './cuidados';
import { Condiciones } from './condiciones';
export interface Producto {
  id:number,
  categoria: string,
  nombreComun: string ,
  nombreCientifico: string ,
  imagen: string,
  dificultad: string,
  fechaCosecha: number,
  estado:boolean,
  createdAt: Date,
  updatedAt: Date
  Condicione: Condiciones,
  Cuidado: Cuidados
}
