import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatlayoutComponent } from './matlayout.component';

describe('MatlayoutComponent', () => {
  let component: MatlayoutComponent;
  let fixture: ComponentFixture<MatlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
