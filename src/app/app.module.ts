import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SentenceEditorComponent } from './sentence-editor/sentence-editor.component';
import { SentenceEditComponent } from './sentence-edit/sentence-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceEditorComponent,
    SentenceEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
