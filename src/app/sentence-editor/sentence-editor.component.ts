import { Component, OnInit, ViewChild } from '@angular/core';
import { SentencesService } from '../shared/sentences.service';
import { Sentence } from '../shared/sentence';
import { SentenceFormComponent } from '../sentence-form/sentence-form.component';

/**
 * Overview of the sentences with
 * an opportunity for selecting an item to edit.
 */
@Component({
  selector: 'sentence-editor',
  templateUrl: './sentence-editor.component.html',
  styleUrls: ['./sentence-editor.component.scss']
})
export class SentenceEditorComponent implements OnInit {
  sentences: Array<Sentence>;
  selected: Sentence = null;

  // Hold reference to formular to set focus, if
  // a sentence is selected.
  @ViewChild('editform') editform: SentenceFormComponent;

  constructor(private sentencesService: SentencesService) { }

  // -----------------------------------------
  // Receive contents from service.
  // -----------------------------------------  
  ngOnInit() {
    this.sentences = this.sentencesService.getSentences();
  }

  // -----------------------------------------
  // Process selected list-item.
  // -----------------------------------------   
  selectItem(item: Sentence) {
    this.selected = item;

    // Catch initial null
    if(this.editform)
      this.editform.setFocus();
  }
}
