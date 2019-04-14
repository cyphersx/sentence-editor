import { Injectable, OnInit } from '@angular/core';
import { data } from './data';
import { Sentence } from './sentence';

/**
 * Service for creating the senctence-instances
 * and managing the data-structure.
 */
@Injectable({
  providedIn: 'root'
})
export class SentencesService {
  sentences: Array<Sentence>;

  // -----------------------------------------
  // Initializing the instances from raw data.
  // -----------------------------------------  
  constructor() {
    this.sentences = data.map(raw => new Sentence(
      raw.n,
      raw.s,
      raw.v,
      raw.o
    ));    
  }

  // ---------------------------------
  // Reads all sentence-instances.
  // ---------------------------------
  getSentences(): Array<Sentence> {
    return this.sentences;
  }
}
