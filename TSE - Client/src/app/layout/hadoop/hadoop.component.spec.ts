import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadoopComponent } from './hadoop.component';

describe('HadoopComponent', () => {
  let component: HadoopComponent;
  let fixture: ComponentFixture<HadoopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadoopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
