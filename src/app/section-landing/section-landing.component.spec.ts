import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLandingComponent } from './section-landing.component';

describe('SectionLandingComponent', () => {
  let component: SectionLandingComponent;
  let fixture: ComponentFixture<SectionLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
