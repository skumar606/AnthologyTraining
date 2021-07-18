import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfExampleComponentComponent } from './ng-if-example-component.component';

describe('NgIfExampleComponentComponent', () => {
  let component: NgIfExampleComponentComponent;
  let fixture: ComponentFixture<NgIfExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfExampleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
