import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateIdComponent } from './cate-id.component';

describe('CateIdComponent', () => {
  let component: CateIdComponent;
  let fixture: ComponentFixture<CateIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
