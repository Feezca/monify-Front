import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredUsersComponent } from './expired-users.component';

describe('ExpiredUsersComponent', () => {
  let component: ExpiredUsersComponent;
  let fixture: ComponentFixture<ExpiredUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiredUsersComponent]
    });
    fixture = TestBed.createComponent(ExpiredUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
