import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatHeaderComponent } from './mat-header.component';

describe('MatHeaderComponent', () => {
  let component: MatHeaderComponent;
  let fixture: ComponentFixture<MatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
