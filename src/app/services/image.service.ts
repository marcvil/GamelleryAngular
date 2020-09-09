import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { IImageFile } from "../interfaces/imageFile";
import { DomSanitizer,SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { IImage } from '../interfaces/image';

@Injectable({providedIn: 'root'})
export class ImageService {
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  getImage(id :Number): Observable<Blob> {
    return this.http.get<Blob>("https://localhost:44320/api/Images/" +id, {observe: 'body', responseType: 'blob' as 'json'})
    };

    getImageFile(id :Number) {
      return this.http.get("https://localhost:44320/api/Images/" +id, { responseType: 'blob'})
        .pipe (
          map((blob:any) => {
            var urlCreator = window.URL;
            return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
          }

          )
        )
      };

      getImageFiles2(id :Number) : Observable<IImage> {

        return this.http.get<IImage>("https://localhost:44320/api/Images/" +id);


        };

    getAllImages(): Observable<any> {
      return this.http.get<Observable<any>>("https://localhost:44320/api/Images", {observe: 'body', responseType: 'json'})
      };
}



