import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryFormComponent } from './diary-form/diary-form.component';
import { fromEventPattern } from 'rxjs';
import { DiaryContentComponent } from './diary-content/diary-content.component';
import { HighlightDirective } from './highlight.directive';
import { DiaryDetailsComponent } from './diary-details/diary-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryFormComponent,
    DiaryContentComponent,
    HighlightDirective,
    DiaryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
