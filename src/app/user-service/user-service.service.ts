import { Injectable } from '@angular/core';
import { LoginType, User } from '../interfaces/user';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../app.state';
import { LoginAction } from '../users/user.action';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private store: Store<AppState>, private router: Router) {}
  users = [
    {
      id: 'u12345',
      firstName: 'Michael',
      lastName: 'Johnson',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      username: 'mjohnson',
      password: 'SecurePass789!',
    },
    {
      id: 'u67890',
      firstName: 'Sophia',
      lastName: 'Chen',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      username: 'sophiac',
      password: 'Chen2024$ecure',
    },
    {
      id: 'u24680',
      firstName: 'James',
      lastName: 'Wilson',
      image: 'https://i.pravatar.cc/300?img=11',
      username: 'jwilson',
      password: 'JW!pass2024',
    },
    {
      id: 'u13579',
      firstName: 'Olivia',
      lastName: 'Martinez',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      username: 'omartinez',
      password: 'Oliv!@2024M',
    },
    {
      id: 'u86420',
      firstName: 'Ethan',
      lastName: 'Williams',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      username: 'ewilliams',
      password: 'EthanW#2024',
    },
    {
      id: 'u97531',
      firstName: 'Ava',
      lastName: 'Thompson',
      image: 'https://randomuser.me/api/portraits/women/64.jpg',
      username: 'athompson',
      password: 'Ava$ecure2024',
    },
    {
      id: 'u45678',
      firstName: 'Noah',
      lastName: 'Garcia',
      image: 'https://randomuser.me/api/portraits/men/72.jpg',
      username: 'ngarcia',
      password: 'NoahG@rcia!',
    },
    {
      id: 'u32109',
      firstName: 'Emma',
      lastName: 'Taylor',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      username: 'etaylor',
      password: 'EmmaT2024#',
    },
    {
      id: 'u78901',
      firstName: 'Alexander',
      lastName: 'Brown',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      username: 'abrown',
      password: 'Alex!Brown24',
    },
    {
      id: 'u54321',
      firstName: 'Isabella',
      lastName: 'Miller',
      image: 'https://randomuser.me/api/portraits/women/82.jpg',
      username: 'imiller',
      password: 'Isa!M1ll3r',
    },
  ];

  login(loginData: LoginType): Observable<{ user: User; token: string }> {
    // console.log("inside login func")
    const userExists = this.users.find(
      (user) =>
        user.username == loginData.username &&
        user.password == loginData.password
    );
    if (userExists) {
      console.log(userExists);
      const token = `mock-jwt-token-${Math.random().toString(36).substring(2)}`;
      // this.router.navigate(['/dashboard']);
      return of({ user: userExists, token });
    }
    return throwError(() => new Error('Invalid username or password'));
  }
}
