import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionprojectComponent } from './sectionproject.component';

describe('SectionprojectComponent', () => {
  let component: SectionprojectComponent;
  let fixture: ComponentFixture<SectionprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
