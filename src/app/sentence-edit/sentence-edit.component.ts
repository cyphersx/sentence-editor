import { Component, OnInit, Input } from '@angular/core';
import { Sentence } from '../shared/sentence';

@Component({
  selector: 'sentence-edit',
  templateUrl: './sentence-edit.component.html',
  styleUrls: ['./sentence-edit.component.scss']
})
export class SentenceEditComponent implements OnInit {
  @Input() sentenceToEdit: Sentence = null;

  constructor() { }

  ngOnInit() {
  }

}
