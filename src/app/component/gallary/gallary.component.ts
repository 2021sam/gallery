import { Component } from '@angular/core';
import { Slide } from '../../interface/slide';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent
{
// slides = list();
  presentation_image: string = 'http://localhost:4200/assets/images/i4.jpeg';
  gallery_height: string = '170px';
  titletip: string = '';

  public PRESENTATION: Slide[] = [
    {image: 'i1.jpeg', title: "Title 1", description: 'Description 1 - Specifying how data scoping unveils new details.'},
    {image: 'i2.jpeg', title: "Title 2", description: 'Description 2'},
    {image: 'i3.jpeg', title: 'Title 3', description: 'Description 3'},
    {image: 'i4.jpeg', title: 'Title 4', description: 'Description 4'},
    {image: 'i5.jpeg', title: 'Title 5', description: 'Description 5'},
    {image: 'i6.jpeg', title: 'Title 6', description: 'Description 6'},
    {image: 'i7.jpeg', title: 'Title 7', description: 'Description 7'},
    {image: 'i8.jpeg', title: 'Title 8', description: 'Description 8'},
    {image: 'i9.jpeg', title: 'Title 9', description: 'Description 9'}
    ];




//   public PRESENTATION: Slide[] = [
//     {image: "i1.jpeg", title: "Title 1", description: "Description 1 - For finer insights."},
//     {image: "i2.jpeg", title: "Title 2", description: "Description 2 - For finer details."}
//     ];



//   @HostBinding("class.images_gallery") height: string = '170px';


    myImage(x: any)
    {
        //       const b_img = document.querySelector(".big_img");
        //       cont broad_img = document.querySelector(".broad_img");
        //       const t_img = x.src;
        //       broad_img.style.display = "none";
        //       b_img.src = t_img;
        console.log('myImage');
        console.log(x);

        let id = 'big_img';
        var big_img = <HTMLInputElement>document.getElementById(id);
        //         let hidden = element.getAttribute("hidden");
        //         console.log(big_img);
        let id2 = 'broad_img';
        var broad_img = <HTMLInputElement>document.getElementById(id2);
        //         let hidden = broad_img.getAttribute("hidden");
        //         console.log(broad_img);
        //          broad_img.setAttribute("hidden", "hidden");
        //          b_img.src = x.src;
        console.log(x.srcElement.currentSrc);
//         big_img.src = x.srcElement.currentSrc;
        this.presentation_image = x.srcElement.currentSrc;
        console.log(this.presentation_image);
//         console.log(big_img);


      this.titletip = 'Awesome Image !';
    }

    onTrigger(x: any)
    {
      console.log(x);
      this.gallery_height = '10px';
    }
}
