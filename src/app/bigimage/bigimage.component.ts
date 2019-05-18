import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../image-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bigimage',
  templateUrl: './bigimage.component.html',
  styleUrls: ['./bigimage.component.css']
})
export class BigimageComponent implements OnInit {

  imgWeb: String[] = [];
  constructor(private imgService: ImageServiceService, private route: ActivatedRoute) {
    this.imgWeb = imgService.getImages(this.route.snapshot.params['id']);
  }

  ngOnInit() {
  }

}
