import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private themes = {'larnach': '34', 'paris': '22', 'spain': '24'};

  constructor() {
  }

  getImages(id: string) {
    const a1: String[] = [];
    /* return this.myImages.slice(0);*/
    for (let i = 1; i <= this.themes[id]; i++) {
      a1.push('../assets/' + id + '/' + i.toString() + '.jpg');
    }
    return a1;
  }

}
