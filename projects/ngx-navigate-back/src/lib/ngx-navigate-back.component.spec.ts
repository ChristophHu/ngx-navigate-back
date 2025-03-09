import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNavigateBackComponent } from './ngx-navigate-back.component';

describe('NgxNavigateBackComponent', () => {
  let component: NgxNavigateBackComponent;
  let fixture: ComponentFixture<NgxNavigateBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNavigateBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxNavigateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
