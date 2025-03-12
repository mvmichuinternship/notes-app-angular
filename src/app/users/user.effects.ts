import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserServiceService } from '../user-service/user-service.service';
import { LoginAction, LoginError, LoginSuccess } from './user.action';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class LoginEffect {
  private actions$ = inject(Actions);
  private userService = inject(UserServiceService);
  constructor(private messageService: MessageService, private router: Router) {
    // console.log('Actions service:', this.actions$);
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginAction),
      // tap((action) => console.log('Login action received:', action)),
      switchMap((action) =>
        this.userService.login(action).pipe(
          // tap((result) => console.log('Service returned:', result)),
          map(({ user, token }) => LoginSuccess({ user, token })),

          catchError((error) => {
            console.error('Login error:', error);
            return of(LoginError({ error: error.message }));
          })
        )
      )
    );
  });
  navigateAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginSuccess),
        tap(async({ user, token }) => {
          localStorage.setItem('auth_token', token);
          await this.router.navigate(['/dashboard']);
          setTimeout(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Login successful',
            });
          }, 0);
  
        })
      ),
    { dispatch: false }
  );

  // showLoginSuccessToast$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(LoginSuccess),
  //       tap(() =>
          
  //       )
  //     ),
  //   { dispatch: false }
  // );
}
