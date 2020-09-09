import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { DomSanitizer,SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IImageFile } from "./../../interfaces/imageFile";
import { IImage } from 'src/app/interfaces/image';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  img: IImage;

  image1?: SafeResourceUrl;
  image2 : SafeResourceUrl;
  image3 : SafeResourceUrl;

  isloaded:boolean;



  constructor(private http :HttpClient,public imageService : ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit()
   {
     this.isloaded=false;
        this.getimg();


    }




    getImage1(id :number)   {

      this.imageService.getImage(id).subscribe((blob :any )=> {


        let objectURL = URL.createObjectURL(blob);
        this.image1 = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(this.image1);
      });


    }
    getImage2(id :number)   {

      this.imageService.getImage(id).subscribe((blob :any )=> {


        let objectURL = URL.createObjectURL(blob);
        this.image2= this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(this.image2);
      });


    }
    getImage3(id :number)   {

      this.imageService.getImage(id).subscribe((blob :any )=> {


        let objectURL = URL.createObjectURL(blob);
        this.image3 = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        console.log(this.image3);
      });


    }

    getimg() {
     this.imageService.getImageFiles2(3)
      .subscribe((resp :IImage )=> {

        this.img = resp;
        console.log(this.img);
        this.isloaded=true;
      })
    }



  }


