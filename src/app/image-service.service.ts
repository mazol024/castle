import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  myImages: String[] = ['../assets/img1.jpg', '../assets/img2.jpg', '../assets/img3.jpg', '../assets/img4.jpg',
    '../assets/img5.jpg', '../assets/img6.jpg', '../assets/img7.jpg', '../assets/img8.jpg', '../assets/img9.jpg'
    , '../assets/img10.jpg', '../assets/img11.jpg', '../assets/img12.jpg', '../assets/img13.jpg', '../assets/img14.jpg'
    , '../assets/img15.jpg', '../assets/img16.jpg', '../assets/img17.jpg', '../assets/img18.jpg', '../assets/img19.jpg'
    , '../assets/img20.jpg', '../assets/img21.jpg', '../assets/img22.jpg', '../assets/img23.jpg', '../assets/img24.jpg'
    , '../assets/img25.jpg', '../assets/img26.jpg', '../assets/img27.jpg', '../assets/img28.jpg', '../assets/img29.jpg'
    , '../assets/img30.jpg', '../assets/img31.jpg', '../assets/img32.jpg', '../assets/img33.jpg', '../assets/img34.jpg'];
  constructor() { }
  getImages() {
    return this.myImages.slice(0);
  }
  getImage(id: number) {
    return this.getImages()[id];
  }
}
