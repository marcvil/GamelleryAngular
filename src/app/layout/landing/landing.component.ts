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

  defaultImage = 'https://www.placecage.com/1000/1000';
  imgArray :IImage[];


  isloaded:boolean;



  constructor(private http :HttpClient,public imageService : ImageService, private sanitizer: DomSanitizer) { }

  ngOnInit()
   {

this.getAllimg();



    }

    /* getimg() {
     this.imageService.getImage(1)
      .subscribe((resp :IImage )=> {

        this.img = resp;


      })
    } */

     getAllimg() {
      this.imageService.getAllImages()
       .subscribe((resp :IImage[] )=> {

         this.imgArray = resp;
         console.log(this.imgArray);


       })
     }



  }


