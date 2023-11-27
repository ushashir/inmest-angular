import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponetComponent } from './user-details-componet.component';

describe('UserDetailsComponetComponent', () => {
  let component: UserDetailsComponetComponent;
  let fixture: ComponentFixture<UserDetailsComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserDetailsComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
