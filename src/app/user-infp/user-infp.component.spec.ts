import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfpComponent } from './user-infp.component';

describe('UserInfpComponent', () => {
  let component: UserInfpComponent;
  let fixture: ComponentFixture<UserInfpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfpComponent]
    });
    fixture = TestBed.createComponent(UserInfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
