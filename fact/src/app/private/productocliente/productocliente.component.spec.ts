import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoclienteComponent } from './productocliente.component';

describe('ProductoclienteComponent', () => {
  let component: ProductoclienteComponent;
  let fixture: ComponentFixture<ProductoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
