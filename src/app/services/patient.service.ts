import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from '../model/patient';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientsUrl: string;
  patients: Patient[];
  searchedpatients: Array<Patient> = [];

  constructor(private http: HttpClient) {
    this.patientsUrl = 'http://localhost:8080/patients';
   
  }

  public findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl);
  }

  public findByName(nom : String) {

    this.findAll().subscribe(data => this.patients = data);
  
    this.patients.forEach( p => { 
        if (p.nom == nom) {
          this.searchedpatients.push(p);
        }
        
      
    });

    return this.searchedpatients;
  }

  public save(patient: Patient) {
    return this.http.post<Patient>(this.patientsUrl, patient);
  }

  public deletePatient(patient: Patient) {
    return this.http.delete(this.patientsUrl + "/"+ patient.id);
  }
}
