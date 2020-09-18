import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaclienteComponent } from './facturacliente.component';

describe('FacturaclienteComponent', () => {
  let component: FacturaclienteComponent;
  let fixture: ComponentFixture<FacturaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
