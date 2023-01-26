import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './component/frame/frame.component';
import { GallaryComponent } from './component/gallary/gallary.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { HovertextDirective } from './directive/hovertext.directive';
import { TooltipDirective } from './directive/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    GallaryComponent,
    PresentationComponent,
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
