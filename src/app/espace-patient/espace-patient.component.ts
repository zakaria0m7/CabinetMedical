import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-espace-patient',
  templateUrl: './espace-patient.component.html',
  styleUrls: ['./espace-patient.component.scss']
})
export class EspacePatientComponent implements OnInit {

  closeResult = '';
  var1 : string = 'ok';
  constructor(private modalService: NgbModal,private router: Router) { }



  ngOnInit(): void {
  }

  onSubmit() {
    this.var1='no' 
  }

  delete() {
    this.router.navigate(['/espacepatient']);
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
