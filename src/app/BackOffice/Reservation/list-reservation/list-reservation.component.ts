import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../Models/Reservation';
import { ReservationServiceService } from '../../../Services/reservation-service.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  userConfirmation: string = '';
typeof: any;

  constructor(private reservationService: ReservationServiceService) { }

  ngOnInit(): void {
    this.getAllReservations();
    
    // Retrieve userConfirmation string from local storage and directly set it
    this.userConfirmation = localStorage.getItem('username') || '';
    console.log(this.userConfirmation)
  }

  getAllReservations(): void {
    this.reservationService.getAllReservation().subscribe(
      (reservations: Reservation[]) => {
        this.reservations = reservations;
        console.log(reservations);

      },
      (error) => {
        console.log('Error fetching reservations:', error);
      }
    );
  }

  confirmReservation(id: string): void {
    if (!this.userConfirmation) {
      console.log('User confirmation not found in local storage.');
      return;
    }

    this.reservationService.confirmReservation(id, this.userConfirmation).subscribe(
      (confirmedReservation: Reservation) => {
        console.log('Reservation confirmed:', confirmedReservation);
        alert('Reservation confirmed successfully.');
        // Refresh the page to reflect the changes
        window.location.reload();
      },
      (error) => {
        console.log('Error confirming reservation:', error);
        alert('Error confirming reservation. Please try again later.');
      }
    );
  }
}