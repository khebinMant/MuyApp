import { PersonasRoles } from './persona-rol';
export interface Huerto {
  id: number,
  detalle: string,
  idPersona: number,
  region: string,
  fruta: boolean,
  legumbre: boolean,
  hierba: boolean,
  estado?: boolean,
  createdAt?:  Date,
  updatedAt?:  Date,
  PersonasRoles: PersonasRoles[],
}
