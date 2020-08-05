import { Producto } from './producto';
export interface Cuidados {
  id: number,
  idProducto: number,
  frecuenciaRiego: number,
  cantidadRiego: number,
  resistenciaFrio: string,
  estado: boolean,
  createdAt: Date,
  updatedAt: Date,
  Producto?: Producto
}
