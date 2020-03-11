
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('https://swapi.co/api/films');
  }

  getFilm(id) {
    return this.http.get(`https://swapi.co/api/films/${id}`);
  }

  // postUser(name, surname, username, password) {

  //   return this.http.post('https://skylabcoders.herokuapp.com/api/v2/users',
  //     JSON.stringify({name, surname, username, password}, headers: {'Content-Type', 'application/json'}, )
  // }
}


