import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerFeatureCreateComponent } from './manager-feature-create.component';

describe('ManagerFeatureCreateComponent', () => {
  let component: ManagerFeatureCreateComponent;
  let fixture: ComponentFixture<ManagerFeatureCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerFeatureCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerFeatureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
