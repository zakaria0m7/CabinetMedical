import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Patient } from '../model/patient';
import { PatientService } from '../services/patient.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

    
    public searchInput: string;
    public programmingLanguages = [
      'Python','TypeScript','C','C++','Java',
      'Go','JavaScript','PHP','Ruby','Swift','Kotlin'
   ]
   valid : boolean = false;
  patients: Patient[];
  searchedPatients : Patient[];
  patient : Patient;
  closeResult = '';
  constructor(private modalService: NgbModal,private patientService: PatientService,
    private route: ActivatedRoute, 
      private router: Router) { 
        this.patient = new Patient();
      }

      onSubmit() {
        this.patientService.save(this.patient).subscribe(result => this.gotoPatientList());
        
        window.location.reload()
      }

      

      onSubmitSearch(){
        
        this.valid=true;
        
      }
    
      gotoPatientList() {
        this.router.navigate(['/patients']);
      }

      deleteUser(patient: Patient): void {
        this.patientService.deletePatient(patient)
          .subscribe( data => {
            this.patients = this.patients.filter(u => u !== patient);
          })
          window.location.reload()
      };

      

  

  ngOnInit() {
    this.patientService.findAll().subscribe(data => {
      this.patients = data;
    });
   
  }

  clickMethod(name: string,patient: Patient) {
    if(confirm("Vous allez supprimer "+ patient.nom + ' ' +patient.prenom)) {
      this.deleteUser(patient);
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
