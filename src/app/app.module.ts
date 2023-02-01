import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { HovertextDirective } from './directive/hovertext.directive';
import { TooltipDirective } from './directive/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    GallaryComponent,
    HovertextDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
