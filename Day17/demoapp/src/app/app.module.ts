import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfExampleComponentComponent } from './ng-if-example-component/ng-if-example-component.component';
import { NgswitchexampleComponent } from './ngswitchexample/ngswitchexample.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfExampleComponentComponent,
    NgswitchexampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
