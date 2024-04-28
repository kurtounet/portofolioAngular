import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionskillsComponent } from './sectionskills.component';

describe('SectionskillsComponent', () => {
  let component: SectionskillsComponent;
  let fixture: ComponentFixture<SectionskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionskillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
