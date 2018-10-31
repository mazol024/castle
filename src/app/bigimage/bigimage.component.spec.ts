import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigimageComponent } from './bigimage.component';

describe('BigimageComponent', () => {
  let component: BigimageComponent;
  let fixture: ComponentFixture<BigimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
