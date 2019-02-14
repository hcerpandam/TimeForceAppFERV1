import { Component, OnInit } from '@angular/core';
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dataprotectionlaw',
  templateUrl: './dataprotectionlaw.component.html',
  styleUrls: ['./dataprotectionlaw.component.scss']
})
export class DataprotectionlawComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
  }

}
