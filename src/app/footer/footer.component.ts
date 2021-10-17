import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../model/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  closeResult = '';
  patient : Patient;
  constructor(private modalService: NgbModal,private patientService: PatientService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.patientService.save(this.patient).subscribe(result => this.gotoPatientList());
    this.clickMethod("name: string",this.patient);
    window.location.reload()
  }

  gotoPatientList() {
    this.router.navigate(['/acceuil']);
  }

  clickMethod(name: string,patient: Patient) {
    if(confirm("Votre demande d'inscription a bien été effectués : "+ patient.nom + ' ' +patient.prenom) ) {
      console.log("Implement delete functionality here");
    }
  }

open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result:any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason:any) => {
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
