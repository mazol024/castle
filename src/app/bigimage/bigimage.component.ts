import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../image-service.service';

@Component({
  selector: 'app-bigimage',
  templateUrl: './bigimage.component.html',
  styleUrls: ['./bigimage.component.css']
})
export class BigimageComponent implements OnInit {

  imgWeb: String[] = [];
  constructor(private imgService: ImageServiceService) {
    this.imgWeb = imgService.getImages();
  }

  ngOnInit() {
  }

}
