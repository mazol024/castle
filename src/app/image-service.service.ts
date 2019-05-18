import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  myImages2 = {
    'castle': ['../assets/castle/img1.jpg', '../assets/castle/img2.jpg', '../assets/castle/img3.jpg', '../assets/castle/img4.jpg',
      '../assets/castle/img5.jpg', '../assets/castle/img6.jpg', '../assets/castle/img7.jpg', '../assets/castle/img8.jpg', '../assets/castle/img9.jpg',
      '../assets/castle/img10.jpg', '../assets/castle/img11.jpg', '../assets/castle/img12.jpg', '../assets/castle/img13.jpg', '../assets/castle/img14.jpg'
      , '../assets/castle/img15.jpg', '../assets/castle/img16.jpg', '../assets/castle/img17.jpg', '../assets/castle/img18.jpg', '../assets/castle/img19.jpg'
      , '../assets/castle/img20.jpg', '../assets/castle/img21.jpg', '../assets/castle/img22.jpg', '../assets/castle/img23.jpg', '../assets/castle/img24.jpg'
      , '../assets/castle/img25.jpg', '../assets/castle/img26.jpg', '../assets/castle/img27.jpg', '../assets/castle/img28.jpg', '../assets/castle/img29.jpg'
      , '../assets/castle/img30.jpg', '../assets/castle/img31.jpg', '../assets/castle/img32.jpg', '../assets/castle/img33.jpg', '../assets/castle/img34.jpg'],
      'paris': ['../assets/paris/1.jpg', '../assets/paris/2.jpg', '../assets/paris/3.jpg', '../assets/paris/4.jpg', '../assets/paris/5.jpg',
      '../assets/paris/6.jpg', '../assets/paris/7.jpg', '../assets/paris/8.jpg', '../assets/paris/9.jpg', '../assets/paris/10.jpg', '../assets/paris/11.jpg',
        '../assets/paris/12.jpg']
  };

  myImages: String[] = ['../assets/castle/img1.jpg', '../assets/castle/img2.jpg', '../assets/castle/img3.jpg', '../assets/castle/img4.jpg',
    '../assets/castle/img5.jpg', '../assets/castle/img6.jpg', '../assets/castle/img7.jpg', '../assets/castle/img8.jpg', '../assets/castle/img9.jpg'
    , '../assets/castle/img10.jpg', '../assets/castle/img11.jpg', '../assets/castle/img12.jpg', '../assets/castle/img13.jpg', '../assets/castle/img14.jpg'
    , '../assets/castle/img15.jpg', '../assets/castle/img16.jpg', '../assets/castle/img17.jpg', '../assets/castle/img18.jpg', '../assets/castle/img19.jpg'
    , '../assets/castle/img20.jpg', '../assets/castle/img21.jpg', '../assets/castle/img22.jpg', '../assets/castle/img23.jpg', '../assets/castle/img24.jpg'
    , '../assets/castle/img25.jpg', '../assets/castle/img26.jpg', '../assets/castle/img27.jpg', '../assets/castle/img28.jpg', '../assets/castle/img29.jpg'
    , '../assets/castle/img30.jpg', '../assets/castle/img31.jpg', '../assets/castle/img32.jpg', '../assets/castle/img33.jpg', '../assets/castle/img34.jpg'];

  constructor() {
  }

  getImages(id: string) {
    // return this.myImages.slice(0);
    return this.myImages2[id];
  }

  /*getImage(id: number) {
    return this.getImages()[id];
  }*/
}
