import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyDetailsComponent } from './doggy-details.component';

describe('DoggyDetailsComponent', () => {
  let component: DoggyDetailsComponent;
  let fixture: ComponentFixture<DoggyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
