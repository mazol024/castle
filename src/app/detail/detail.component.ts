import { Component, OnInit } from '@angular/core';
import {ImageServiceService} from '../image-service.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  img: any;
  constructor(private imgService: ImageServiceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.img = this.route.snapshot.params['i'];
  }

}
