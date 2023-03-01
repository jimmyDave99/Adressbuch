import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktAppComponent } from './kontakt-app.component';

describe('KontaktAppComponent', () => {
  let component: KontaktAppComponent;
  let fixture: ComponentFixture<KontaktAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
