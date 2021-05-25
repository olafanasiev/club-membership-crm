import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

export interface Token {
  access_token: string;
}
@Injectable({providedIn:'root'})
export class UserService {
  private tokenSubject: BehaviorSubject<Token>;
  public token$: Observable<Token>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.tokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
    this.token$ = this.tokenSubject.asObservable();
  }

  public get token(): Token {
    return this.tokenSubject.value;
  }

  login(username, password) {
    return this.http.post<Token>(`/api/auth/login`, { username, password })
      .pipe(map(tokenObject => {

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('token', JSON.stringify(tokenObject));
        this.tokenSubject.next(tokenObject);
        return tokenObject;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  getAll() {
    return this.http.get<User[]>(`/api/user`);
  }

  getById(id: string) {
    return this.http.get<User>(`/api/user/${id}`);
  }

  update(id, params) {
    return this.http.put(`/api/user/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        return x;
      }));
  }

  delete(id: string) {
    return this.http.delete(`/api/user/${id}`)
      .pipe(map(x => {
        return x;
      }));
  }
}