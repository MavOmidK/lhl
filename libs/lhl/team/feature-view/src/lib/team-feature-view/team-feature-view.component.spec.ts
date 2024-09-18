import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamFeatureViewComponent } from './team-feature-view.component';

describe('TeamFeatureViewComponent', () => {
  let component: TeamFeatureViewComponent;
  let fixture: ComponentFixture<TeamFeatureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamFeatureViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamFeatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
