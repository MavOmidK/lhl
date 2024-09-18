import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamFeaturePageComponent } from './team-feature-page.component';

describe('TeamFeaturePageComponent', () => {
  let component: TeamFeaturePageComponent;
  let fixture: ComponentFixture<TeamFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
