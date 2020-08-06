import { Producto } from './producto';
export interface Condiciones {
  id: number,
  idProducto: number,
  tipoSuelo: string,
  espacioRecomendado: number,
  profundidadSemilla: number,
  estado: boolean,
  createdAt: Date,
  updatedAt: Date,
  Producto?: Producto
}
