import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceEditComponent } from './sentence-edit.component';

describe('SentenceEditComponent', () => {
  let component: SentenceEditComponent;
  let fixture: ComponentFixture<SentenceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentenceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
