// import { Directive } from '@angular/core';
//
// @Directive({
//   selector: '[appTooltip]'
// })
// export class TooltipDirective {
//
//   constructor() { }
//
// }

import { Directive, ElementRef, OnDestroy, HostListener, Component, Input } from "@angular/core";
// import { Component, Input } from '@angular/core'; // First, import Input

@Directive({
  selector: "[tooltip]",
})


export class TooltipDirective implements OnDestroy
 {
  @Input() tooltip = ""; // The text for the tooltip to display
  @Input () image_description = "";   //: string;
//   @Input() appBtnGrow: string
  @Input() delay? = 190; // Optional delay input, in ms

  private myPopup: any;
  private myPop_description: any;
  private timer: any;
  titletip: string = 'Very Cool';

  constructor(private el: ElementRef) {
    console.log(el);
  }

  ngOnDestroy(): void {
    if (this.myPopup) {
      this.myPopup.remove();
    }
    if (this.myPop_description) {
      this.myPop_description.remove();
    }
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.timer = setTimeout(() => {
      let x =
        this.el.nativeElement.getBoundingClientRect().left +
        this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
      let y =
        this.el.nativeElement.getBoundingClientRect().top +
        this.el.nativeElement.offsetHeight +
        6; // Get the bottom of the element, plus a little extra
      this.createTooltipPopup(x, y);
    }, this.delay);
  }

  @HostListener("mouseleave") onMouseLeave()
   {
    if (this.timer) clearTimeout(this.timer);
    if (this.myPopup)
     {
      this.myPopup.remove();
    }

        if (this.myPop_description) {
      this.myPop_description.remove();
    }


  }

  private createTooltipPopup(x: number, y: number)
   {
    console.log(this.image_description);

    let popup = document.createElement("h1");
    let pop_description = document.createElement("h4");
    popup.innerHTML = this.tooltip;
    pop_description.innerHTML = this.image_description;
    popup.setAttribute("class", "tooltip-container");
    popup.style.top = y.toString() + "px";
    popup.style.left = x.toString() + "px";
    document.body.appendChild(popup);
    document.body.appendChild(pop_description);
    this.myPopup = popup;
    this.myPop_description = pop_description;
    setTimeout(() => {
      if (this.myPopup) this.myPopup.remove();
      if (this.myPop_description) this.myPop_description.remove();
    }, 5000); // Remove tooltip after 5 seconds
  }

}
