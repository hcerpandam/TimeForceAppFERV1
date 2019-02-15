import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";
import {UsuarioService} from "../../../services/usuario.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() usuario: Usuario;
  nuevoUsuario= new Usuario();

  //Solo pruebas
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.nuevoUsuario));
  }

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  crearUsuario() {
    this.usuarioService.createUsuario(this.nuevoUsuario).subscribe(servicioCreado => this.nuevoUsuario = servicioCreado );
  }

}
