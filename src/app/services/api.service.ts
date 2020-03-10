
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

  postUser(name, surname, username, password) {

    return this.http.post('https://skylabcoders.herokuapp.com/api/v2/users',
      JSON.stringify({name, surname, username, password}), headers: {'Content-Type', 'application/json'}, )
  }
}

var data = JSON.stringify({ employee: { name: “abcd”, mobile: “8229678323”}});

let headers = new Headers();
headers.append(‘Content-Type’, ‘application/json’);
let options = { headers: headers };

this.http.post(link,data,options).subscribe(data =>{
alert(data);
},error => {
alert("Error "+ error.error);
});
