import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideStore, StoreModule } from '@ngrx/store';
import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { loginReducer } from './app/users/user.reducer';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LoginEffect } from './app/users/user.effects';
// import { reducers } from './app/users';
// import { effects } from './app/users';
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    // provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot({ user: loginReducer }),
      // EffectsModule.forRoot([LoginEffect]),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !isDevMode(),
      })
    ),
  ],
}).catch((err) => console.error(err));
