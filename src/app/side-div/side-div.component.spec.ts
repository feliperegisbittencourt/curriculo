import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDivComponent } from './side-div.component';

describe('SideDivComponent', () => {
  let component: SideDivComponent;
  let fixture: ComponentFixture<SideDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
