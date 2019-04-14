import { TestBed } from '@angular/core/testing';

import { SentencesService } from './sentences.service';

describe('SentencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SentencesService = TestBed.get(SentencesService);
    expect(service).toBeTruthy();
  });
});
