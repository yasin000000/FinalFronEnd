import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuizeComponent } from './update-quize.component';

describe('UpdateQuizeComponent', () => {
  let component: UpdateQuizeComponent;
  let fixture: ComponentFixture<UpdateQuizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
