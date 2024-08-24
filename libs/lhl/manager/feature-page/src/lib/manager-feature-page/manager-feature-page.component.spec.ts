import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerFeaturePageComponent } from './manager-feature-page.component';

describe('ManagerFeaturePageComponent', () => {
  let component: ManagerFeaturePageComponent;
  let fixture: ComponentFixture<ManagerFeaturePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerFeaturePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerFeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
