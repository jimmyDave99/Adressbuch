import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKontaktComponent } from './add-kontakt.component';

describe('AddKontaktComponent', () => {
  let component: AddKontaktComponent;
  let fixture: ComponentFixture<AddKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
