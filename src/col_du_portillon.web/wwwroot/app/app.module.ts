import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent} from './app.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }

// These changes were required to get the example to run.
