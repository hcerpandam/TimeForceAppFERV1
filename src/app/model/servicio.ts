import {Usuario} from "./usuario";

export class Servicio {

   idServicio: number;

   categoria: string;

   descServicio: string;

   fechaHora: Date;

   ofertante: Usuario;

   consumidor: Usuario;

   localizacion_acor: string;

   valoracion: string;

   mensaje: string;

   precio: number;

   cancelado: boolean;
}
