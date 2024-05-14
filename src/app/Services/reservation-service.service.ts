import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private apiUrl = 'https://testhebergement.onrender.com/api/reservations';

  constructor(private http: HttpClient) { }

  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/getall`);
  }

  confirmReservation(id: string, userConfirmation: string): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/confirm/${id}`, userConfirmation );
  }
  
}
