import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  /**
   * Declaración objeto model
   */
  model: any = {};//TODO: Sustituir por lo que corresponda

  //Solo pruebas
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  constructor() { }

  ngOnInit() {
  }

}
