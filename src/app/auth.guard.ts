import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { selectAuthToken } from './users/user.selector';
import { map, Observable } from 'rxjs';

//NEW METHOD
// export const authGuard: CanActivateFn = (route, state) => {
//   const store = inject(Store);
//   const router = inject(Router);

//   return store.select(selectAuthToken).pipe(
//     map((token) => {
//       if (!token) {
//         console.log(token);
//         router.navigate(['/login']);
//         return false;
//       }
//       console.log(token);
//       router.navigate(['/dashboard']);
//       return true;
//     })
//   );
// };

//OLDER VERSIONS
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.select(selectAuthToken).pipe(
      map((token) => {
        // console.log(token)
        if (!token) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
