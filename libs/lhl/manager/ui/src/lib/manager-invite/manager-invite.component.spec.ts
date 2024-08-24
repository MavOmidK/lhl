import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerInviteComponent } from './manager-invite.component';

describe('ManagerInviteComponent', () => {
  let component: ManagerInviteComponent;
  let fixture: ComponentFixture<ManagerInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerInviteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
