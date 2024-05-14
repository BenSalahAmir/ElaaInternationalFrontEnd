import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap } from 'rxjs';
import { Role, User } from '../Models/User';
import { HttpClient } from '@angular/common/http';

interface DecodedToken {
  sub: string;
  role: string[]; // or string if the role is not an array
  exp: number;
  iat: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'https://testhebergement.onrender.com';
  public currentUser: Observable<User> | undefined;
  private currentUserSubject!: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    const user = storedUser ? JSON.parse(storedUser) : null;
    this.currentUserSubject = new BehaviorSubject<User>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public clear() {
    localStorage.clear();
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/signin`, credentials)
      .pipe(
        tap((response: any) => {
          // Store the JWT token in local storage
          localStorage.setItem('jwtToken', response.jwtCookie);

          // Access the user role directly from the response
          const userRole = response.roles[0]; // Assuming roles are returned as an array
          console.log('User Role:', userRole);

          // Store the user role in local storage
          localStorage.setItem('userRole', userRole);

          localStorage.setItem('username', response.username);


          // Store the user information in local storage
          const userInfo: User = {
            id: response.id,
            username: response.username,
            email: response.email,
            password: response.password,
            RefContrat: response.refContrat,
            roles: response.roles
          };
          localStorage.setItem('currentUser', JSON.stringify(userInfo));

          // Update the current user subject
          this.currentUserSubject.next(userInfo);
        }),
        catchError((error) => {
          throw error;
        })
      );
  }

  getJwtToken(): string {
    return localStorage.getItem('jwtToken') || '';
  }

  public setRoles(roles: Role[]) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
}
