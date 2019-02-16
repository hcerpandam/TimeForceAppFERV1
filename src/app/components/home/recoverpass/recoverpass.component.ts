import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../model/usuario";


@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.scss']
})
export class RecoverpassComponent implements OnInit {

  usuario: Usuario=new Usuario();

  constructor() {

  }

  ngOnInit() {

  }

  recoverPass(){


  }

}
