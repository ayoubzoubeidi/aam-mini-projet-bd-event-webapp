import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PageClientModel} from '../models/page-client.model';
import {Observable} from 'rxjs';

@Injectable()
export class EventService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public getStudentPage(page: number): Observable<PageClientModel> {

    const url = this.baseUrl + '/events'

    // const headers = new HttpHeaders({'page': page.toString()});

    return this.http.get<PageClientModel>(url);

  }

}
