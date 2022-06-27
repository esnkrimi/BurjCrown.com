import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '@services/api.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserEffects {
    loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType('[user] login'),
        mergeMap((k) => this.apiService.handleSuccessLogin(k['user'])
            .pipe(
                map(() => ({ type: '[login] user logined' })),
                catchError(() => EMPTY)
            )),
        ofType('[user] logout'),
        mergeMap((k) => this.apiService.signOut()
            .pipe(
                map(() => ({ type: '[logout] user did logout' })),
                catchError(() => EMPTY)
            ))
    )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) { }
}
