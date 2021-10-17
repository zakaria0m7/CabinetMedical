import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RendezVous } from '../model/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  private rdvsUrl : string;
  constructor(private http: HttpClient) {
    this.rdvsUrl = 'http://localhost:8080/rendezVouses';
   
  }

  public findAll(): Observable<RendezVous[]> {
    return this.http.get<RendezVous[]>(this.rdvsUrl);
  }

  public save(rdv: RendezVous) {
    return this.http.post<RendezVous>(this.rdvsUrl, rdv);
  }

  public deletePatient(rdv: RendezVous) {
    return this.http.delete(this.rdvsUrl + "/"+ rdv.id);
  }

  
}
