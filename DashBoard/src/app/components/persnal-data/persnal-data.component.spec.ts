import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnalDataComponent } from './persnal-data.component';

describe('PersnalDataComponent', () => {
  let component: PersnalDataComponent;
  let fixture: ComponentFixture<PersnalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersnalDataComponent]
    });
    fixture = TestBed.createComponent(PersnalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
