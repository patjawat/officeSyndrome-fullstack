import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitComponent } from './lsit.component';

describe('LsitComponent', () => {
  let component: LsitComponent;
  let fixture: ComponentFixture<LsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
