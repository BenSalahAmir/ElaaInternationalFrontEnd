export class Reservation {
  id: string;
  serviceName: string;
  userName: string;
  userConfirmation: string;
  reservationDateTime: Date;
  isConfirmed: string;

  constructor(
    id: string,
    serviceName: string,
    userName: string,
    userConfirmation: string,
    reservationDateTime: Date,
    isConfirmed: string
  ) {
    this.id = id;
    this.serviceName = serviceName;
    this.userName = userName;
    this.userConfirmation = userConfirmation;
    this.reservationDateTime = reservationDateTime;
    this.isConfirmed = isConfirmed;
  }
}
