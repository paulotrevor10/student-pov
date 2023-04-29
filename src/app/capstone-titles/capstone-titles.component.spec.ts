import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneTitlesComponent } from './capstone-titles.component';

describe('CapstoneTitlesComponent', () => {
  let component: CapstoneTitlesComponent;
  let fixture: ComponentFixture<CapstoneTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapstoneTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapstoneTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
