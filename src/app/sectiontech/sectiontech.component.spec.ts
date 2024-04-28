import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiontechComponent } from './sectiontech.component';

describe('SectiontechComponent', () => {
  let component: SectiontechComponent;
  let fixture: ComponentFixture<SectiontechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectiontechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectiontechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
