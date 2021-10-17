import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RendezVous } from '../model/rendezVous';
import { RendezVousService } from '../services/rendez-vous.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  var1 : string = 'ok';

  rdvs: RendezVous[];
  rdv : RendezVous;
  closeResult = '';
  constructor(private modalService: NgbModal,private rdvService: RendezVousService,
    private route: ActivatedRoute, 
      private router: Router) { 
        this.rdv = new RendezVous();
      }

      onSubmit() {
        this.var1='no'
        this.rdv.valide=false;
        console.log(this.rdv.date_rdv  )
        this.rdvService.save(this.rdv).subscribe(result => this.gotoRdvList());
        
      }

      gotoRdvList() {
        this.router.navigate(['/agenda']);
      }

      deleteUser(rdv: RendezVous): void {
        this.rdvService.deletePatient(rdv)
          .subscribe( data => {
            this.rdvs = this.rdvs.filter(u => u !== rdv);
          })
          window.location.reload()
      };

      ngOnInit() {
        this.rdvService.findAll().subscribe(data => {
          this.rdvs = data;
        });
      }

      clickMethod(name: string,rdv: RendezVous) {
        if(confirm("Vous allez supprimer un rendez vous")) {
          this.deleteUser(rdv);
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
