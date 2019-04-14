import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SentencesService } from '../shared/sentences.service';
import { Sentence } from '../shared/sentence';

@Component({
  selector: 'sentence-editor',
  templateUrl: './sentence-editor.component.html',
  styleUrls: ['./sentence-editor.component.scss']
})
export class SentenceEditorComponent implements OnInit {
  sentences: Array<Sentence>;
  selected: Sentence = null;

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
  }
}
