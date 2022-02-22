import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandIdComponent } from './brand-id.component';

describe('BrandIdComponent', () => {
  let component: BrandIdComponent;
  let fixture: ComponentFixture<BrandIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
