import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { DomSanitizer,SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Blob } from "./../../blob.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public urlS: SafeResourceUrl;
  imageToShow : any;
  image1 : SafeResourceUrl;
  image2 : SafeResourceUrl;
  image3 : SafeResourceUrl;
  result: SafeUrl;
  isImageLoading:boolean;


  constructor(private http :HttpClient,public imageService : ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit()
   {


    this.image1 = this.getImage(1);
    console.log(this.getImage(1));

    }



    getImagedata(): Observable<any>{


    }

    getImage(id :number) :Promise<SafeUrl>  {

     this.imageService.getImage(id).subscribe((blob : any )=> {


       let objectURL = URL.createObjectURL(blob);
       result =this.sanitizer.bypassSecurityTrustUrl(objectURL);
return result;
      });



      /*
      this.imageService.getImage(id).subscribe((blob :any )=> {

        let objectURL = URL.createObjectURL(blob);
        this.imageToShow = this.sanitizer.bypassSecurityTrustResourceUrl(objectURL);

        if( this.imageToShow != null){
          return this.imageToShow;
        }
        else{
          return null;
        }


      });
      return null;

      */
    }

  }


