import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllProductComponent } from './find-all-product.component';

describe('FindAllProductComponent', () => {
  let component: FindAllProductComponent;
  let fixture: ComponentFixture<FindAllProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
