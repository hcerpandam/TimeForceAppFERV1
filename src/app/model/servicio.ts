import {Usuario} from "./usuario";

export class Servicio {

   id: number;

   categoria: string;

   descServicio: string;

   fechaHora: Date;

   ofertante: Usuario;

   consumidor: Usuario;

   localizacion_acor: number;

   valoracion: number;

   mensaje: string;

   precio: number;

   cancelado: boolean;
}