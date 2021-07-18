// add this in your app.module.ts
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// particular imports for hammer
import * as Hammer from 'hammerjs';
import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

@NgModule({
    imports: [BrowserModule, FormsModule, HammerModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: MyHammerConfig,
        },
    ],
})
export class AppModule { }
