import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKontaktComponent } from './delete-kontakt.component';

describe('DeleteKontaktComponent', () => {
  let component: DeleteKontaktComponent;
  let fixture: ComponentFixture<DeleteKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
