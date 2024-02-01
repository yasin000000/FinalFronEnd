import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQueitionsComponent } from './add-queitions.component';

describe('AddQueitionsComponent', () => {
  let component: AddQueitionsComponent;
  let fixture: ComponentFixture<AddQueitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQueitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQueitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
