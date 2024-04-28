import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsjobsComponent } from './sectionsjobs.component';

describe('SectionsjobsComponent', () => {
  let component: SectionsjobsComponent;
  let fixture: ComponentFixture<SectionsjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsjobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionsjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
