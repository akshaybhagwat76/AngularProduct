import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuschangerComponent } from './statuschanger.component';

describe('StatuschangerComponent', () => {
  let component: StatuschangerComponent;
  let fixture: ComponentFixture<StatuschangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatuschangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatuschangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
