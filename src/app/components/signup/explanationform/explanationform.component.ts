import { Component, OnInit } from '@angular/core';
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-explanationform',
  templateUrl: './explanationform.component.html',
  styleUrls: ['./explanationform.component.scss']
})
export class ExplanationformComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
  }

}
