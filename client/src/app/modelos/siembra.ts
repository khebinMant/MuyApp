import { Producto } from './producto';
import { Huerto } from './huerto';
export interface Siembra {
  id: number,
  idProducto: number,
  idHuerto: number,
  fechaSiembra: Date,
  fechaCosecha: Date,
  fechaRiego: Date,
  estadoRiego: boolean,
  cosechado: boolean,
  estado?: boolean,
  createdAt?: Date,
  updatedAt?: Date
  Producto: Producto,
  Huerto: Huerto,
}
