export interface Persona {
  id:number,
  nombre: string,
  apellido: string,
  correoElectronico: string,
  psw: string,
  foto: string,
  estado?: boolean,
  createdAt?: Date,
  updatedAt?: Date
}
