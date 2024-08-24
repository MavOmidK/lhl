import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerFeatureViewComponent } from './manager-feature-view.component';

describe('ManagerFeatureViewComponent', () => {
  let component: ManagerFeatureViewComponent;
  let fixture: ComponentFixture<ManagerFeatureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerFeatureViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerFeatureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
