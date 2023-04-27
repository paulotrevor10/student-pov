import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfileSettingComponent } from './student-profile-setting.component';

describe('StudentProfileSettingComponent', () => {
  let component: StudentProfileSettingComponent;
  let fixture: ComponentFixture<StudentProfileSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProfileSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfileSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
