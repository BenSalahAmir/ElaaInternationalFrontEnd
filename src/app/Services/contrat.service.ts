import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContratAssurance } from '../Models/ContratAssurance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  private apiUrl = 'http://localhost:9099/contrat';

  constructor(private http: HttpClient) { }

  addContrat(contrat: ContratAssurance): Observable<ContratAssurance> {
    return this.http.post<ContratAssurance>(`${this.apiUrl}/add`, contrat);
  }

  getAllContrats(): Observable<ContratAssurance[]> {
    return this.http.get<ContratAssurance[]>(`${this.apiUrl}/all`);
  }


  deleteContrat(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getContratById(id:String):Observable<ContratAssurance>{
    return this.http.get<ContratAssurance>(`${this.apiUrl}/getbyid/${id}`);
  }

  updateContrat(id: string, updatedContrat: ContratAssurance): Observable<ContratAssurance> {
    return this.http.put<ContratAssurance>(`${this.apiUrl}/update/${id}`, updatedContrat);
  }




}
