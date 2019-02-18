import {Rol} from "./rol";

export class Usuario {

   idUsuario: number;

   username: string;

   password: string;

   nombre: string;

   apellidos: string;

   fechaNacimiento: Date;

   tipoVia: string;

   nombreVia: string;

   numeroPortal: number;

   escalera: string;

   puerta: number;

   localidad: string;

   provincia: string;

   codPostal: number;

   telefono: number;

   mail: string;

   balance: number;

   baneado: boolean;

   rol: Rol;

}
