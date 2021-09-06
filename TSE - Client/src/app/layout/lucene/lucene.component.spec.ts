import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuceneComponent } from './lucene.component';

describe('LuceneComponent', () => {
  let component: LuceneComponent;
  let fixture: ComponentFixture<LuceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
