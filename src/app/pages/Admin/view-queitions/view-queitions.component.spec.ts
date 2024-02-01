import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQueitionsComponent } from './view-queitions.component';

describe('ViewQueitionsComponent', () => {
  let component: ViewQueitionsComponent;
  let fixture: ComponentFixture<ViewQueitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQueitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQueitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
