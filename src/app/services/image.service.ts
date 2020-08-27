import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';


@Injectable({providedIn: 'root'})
export class ImageService {
  constructor(private http: HttpClient) { }

  getImage(id :Number): Observable<Blob> {
    return this.http.get<Blob>("https://localhost:44320/api/Images/" +id, {observe: 'body', responseType: 'blob' as 'json'})
    };


    getAllImages(): Observable<any> {
      return this.http.get<Observable<any>>("https://localhost:44320/api/Images", {observe: 'body', responseType: 'json'})
      };
}



