import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {
// slides = list();
  presentation_image: string = 'http://localhost:4200/assets/images/i4.jpeg';
  gallery_height: string = '170px';


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
    }

    onTrigger(x: any){
      console.log(x);
              // .images_gallery {
              //     display: flex;
              //     flex-direction: row;
              //     justify-content: left;
              //     align-items: center;
              //     width: 40vw;
              //     height: 170px;
        //       this.elRef.nativeElement.style.setProperty('g')
      this.gallery_height = '10px';
    }
}
