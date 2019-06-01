import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  public static output1: any = [];
  output2: any;
  constructor() {

  }
  getImages1(id: string) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = async function() {
      if (this.readyState === 4 && this.status === 200) {
        const myObj = JSON.parse(this.responseText);
        ImageServiceService.output1 = myObj;
      }
    };
    xmlhttp.open('GET', '/assets/' + id + '/memos.txt', false);
    xmlhttp.send();
    this.output2 = ImageServiceService.output1;
  }

}
