import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallimageComponent } from './smallimage.component';

describe('SmallimageComponent', () => {
  let component: SmallimageComponent;
  let fixture: ComponentFixture<SmallimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
