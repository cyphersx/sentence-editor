import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SentenceEditorComponent } from './sentence-editor/sentence-editor.component';
import { SentenceFormComponent } from './sentence-form/sentence-form.component';
import { ControlBarComponent } from './control-bar/control-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceEditorComponent,
    SentenceFormComponent,
    ControlBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
