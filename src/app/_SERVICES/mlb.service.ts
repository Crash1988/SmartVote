import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduledDay } from '../_MODELS/mlb-models';

@Injectable({
  providedIn: 'root'
})
export class MlbService {

  constructor(private http: HttpClient) { }

  FetchGame(date: string): Observable<ScheduledDay> {

    return this.http.get<ScheduledDay>(`https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${date}&language=en`);
  }
}
