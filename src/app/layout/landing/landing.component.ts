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
  img2: IImage;
  img3: IImage;
  imgArray :IImage[];
  image1?: SafeResourceUrl;
  image2 : SafeResourceUrl;
  image3 : SafeResourceUrl;

  isloaded:boolean;



  constructor(private http :HttpClient,public imageService : ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit()
   {
    //'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=='
        this.getAllimg();



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
     this.imageService.getImageFiles2(1)
      .subscribe((resp :IImage )=> {

        this.img = resp;


      })
    }
    getimg2() {
      this.imageService.getImageFiles2(2)
       .subscribe((resp :IImage )=> {

         this.img2 = resp;


       })
     }
     getimg3() {
      this.imageService.getImageFiles2(3)
       .subscribe((resp :IImage )=> {

         this.img3 = resp;


       })
     }
     getAllimg() {
      this.imageService.getAllImages()
       .subscribe((resp :IImage[] )=> {

         this.imgArray = resp;
         console.log(this.imgArray);


       })
     }



  }


