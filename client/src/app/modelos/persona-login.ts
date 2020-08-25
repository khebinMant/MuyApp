import { PersonasRoles } from './persona-rol';
export interface PersonaLogin {
  id:number,
  nombre:string,
  apellido:string,
  correoElectronico:string,
  psw: string,
  foto: string,
  confirmacion: boolean,
  createdAt?: Date,
  updatedAt?: Date,
  PersonasRoles: PersonasRoles[]
}
