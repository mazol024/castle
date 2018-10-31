import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {ImageServiceService} from '../image-service.service';

@Component({
  selector: 'app-smallimage',
  templateUrl: './smallimage.component.html',
  styleUrls: ['./smallimage.component.css']
})
export class SmallimageComponent implements OnInit, OnChanges {
  imgWeb: String[] = [];
  constructor(private imgService: ImageServiceService) {
    this.imgWeb = imgService.getImages();
  }
  ngOnInit() {
  }
  ngOnChanges() {
    this.imgWeb = this.imgService.getImages();
  }
}
