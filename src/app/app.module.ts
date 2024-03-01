import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { AppComponent } from './app.component';
import { RfpFormComponent } from './rfp-form/rfp-form.component'; // Adjust with your component

@NgModule({
  declarations: [
    AppComponent,
    RfpFormComponent // Your component
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
