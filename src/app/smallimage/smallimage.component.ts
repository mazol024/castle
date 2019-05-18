import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {ImageServiceService} from '../image-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-smallimage',
  templateUrl: './smallimage.component.html',
  styleUrls: ['./smallimage.component.css']
})
export class SmallimageComponent implements OnInit, OnChanges {
  imageKey: string;
  imgWeb: String[] = [];
  constructor(private imgService: ImageServiceService, private route: ActivatedRoute) {
    this.imageKey = this.route.snapshot.url[1].path;
    this.imgWeb = this.imgService.getImages(this.imageKey);
  }
  ngOnInit() {
    this.imageKey = this.route.snapshot.url[1].path;
    this.imgWeb = this.imgService.getImages(this.imageKey);
  }
  ngOnChanges() {
  }
}
