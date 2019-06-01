import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {ImageServiceService} from '../image-service.service';
import {ActivatedRoute} from '@angular/router';
import {async} from 'q';

@Component({
  selector: 'app-smallimage',
  templateUrl: './smallimage.component.html',
  styleUrls: ['./smallimage.component.css']
})
export class SmallimageComponent implements OnInit, OnChanges {
  imagesAll: any;

  constructor(private imgService: ImageServiceService, private route: ActivatedRoute) {
    this.imgService.getImages1(this.route.snapshot.url[1].path);
    this.imagesAll = this.imgService.output2.files;
    ImageServiceService.output1 = null;
  }

  ngOnInit() {
    this.imgService.getImages1(this.route.snapshot.url[1].path);
    this.imagesAll = this.imgService.output2.files;
    ImageServiceService.output1 = null;
    //this.alt1 = this.imgWeb[0].toString().substr(10, this.imgWeb[0].toString().lastIndexOf('/') - 10).toUpperCase();
  }
  ngOnChanges() {
    this.imgService.getImages1(this.route.snapshot.url[1].path);
    this.imagesAll = ImageServiceService.output1.files;
  }
}
