import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../image-service.service';
import { ActivatedRoute} from '@angular/router';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  img: any;
  alt: string;
  constructor(private imgService: ImageServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.img = this.route.snapshot.params['i'];
    this.alt = this.img.toString().substr(10, this.img.toString().lastIndexOf('/') - 10).toUpperCase();
  }

}
