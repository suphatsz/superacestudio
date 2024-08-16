import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room123Component } from './room123.component';

describe('Room123Component', () => {
  let component: Room123Component;
  let fixture: ComponentFixture<Room123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Room123Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Room123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
