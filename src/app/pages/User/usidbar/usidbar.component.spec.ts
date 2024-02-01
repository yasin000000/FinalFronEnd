import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsidbarComponent } from './usidbar.component';

describe('UsidbarComponent', () => {
  let component: UsidbarComponent;
  let fixture: ComponentFixture<UsidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsidbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
