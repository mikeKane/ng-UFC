import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getFighters() {
    return this.http.get('http://ufc-data-api.ufc.com/api/v1/us/fighters')
  }

  getFighter(fighterId) {
    return this.http.get('http://ufc-data-api.ufc.com//api/v1/us/fighters/'+fighterId)
  }
}
