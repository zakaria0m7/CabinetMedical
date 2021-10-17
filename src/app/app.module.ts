import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgSelectModule } from "@ng-select/ng-select";
import { SearchPipe } from './patients/search.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { NewsCliniqueComponent } from './news-clinique/news-clinique.component';
import { MultiItemGalleryComponent } from './multi-item-gallery/multi-item-gallery.component';
import { PlanningComponent } from './planning/planning.component';
import { CabinetComponent } from './cabinet/cabinet.component';
import { ContactComponent } from './contact/contact.component';
import { NosservicesComponent } from './nosservices/nosservices.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DocteursComponent } from './docteurs/docteurs.component';
import { Gallery2Component } from './gallery2/gallery2.component';
import { PatientsComponent } from './patients/patients.component';
import { EspacePatientComponent } from './espace-patient/espace-patient.component';
import { AgendaComponent } from './agenda/agenda.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    NewsApiComponent,
    NewsCliniqueComponent,
    MultiItemGalleryComponent,
    PlanningComponent,
    CabinetComponent,
    ContactComponent,
    NosservicesComponent,
    ContactFormComponent,
    DocteursComponent,
    Gallery2Component,
    PatientsComponent,
    EspacePatientComponent,
    AgendaComponent,
    SearchPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
