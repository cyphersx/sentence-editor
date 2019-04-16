import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Sentence } from '../shared/sentence';
import { SentencesService } from '../shared/sentences.service';

/**
 * Formular for editing the
 * particular values of a sentence.
 */
@Component({
  selector: 'sentence-form',
  templateUrl: './sentence-form.component.html',
  styleUrls: ['./sentence-form.component.scss']
})
export class SentenceFormComponent implements OnInit {
  @Input() sentenceToEdit: Sentence;

  // Fieldref for setting focus.
  @ViewChild('subject') subject: ElementRef;

  constructor(private sentencesService: SentencesService) { }

  // ---------------------------------------------------
  // Sets the focus once on init.
  // ---------------------------------------------------  
  ngOnInit() {    
     this.setFocus();    
  }

  // ---------------------------------------------------
  // Is calling by parent, if overview-item is selected.
  // ---------------------------------------------------   
  setFocus() {
    this.subject.nativeElement.focus();
  }

  // ---------------------------------------------------
  // Validation on missing sentence-elements.
  // ---------------------------------------------------   
  invalid(elem: string): boolean {
    return !this.sentenceToEdit.isComplete() &&
            this.sentenceToEdit[elem].length == 0;
  }
  valid(elem: string): boolean {
    return !this.sentenceToEdit.isComplete() &&
            this.sentenceToEdit[elem].length > 0;
  }
}