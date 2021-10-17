import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from './acceuil/acceuil.component'
import {  ContactComponent } from './contact/contact.component';
import {  CabinetComponent } from './cabinet/cabinet.component';
import {  NosservicesComponent } from './nosservices/nosservices.component';
import {PatientsComponent} from './patients/patients.component'
import {AgendaComponent} from './agenda/agenda.component'
import {EspacePatientComponent} from './espace-patient/espace-patient.component'
const routes: Routes = [
  { path:'', component : AcceuilComponent},
  { path:'acceuil', component : AcceuilComponent},
  {path:'contact',component: ContactComponent },
  {path:'cabinet',component: CabinetComponent },
  {path:'nosservices',component: NosservicesComponent },
  {path:'patients',component: PatientsComponent },
  {path:'espacepatient',component: EspacePatientComponent },
  {path:'agenda',component: AgendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
