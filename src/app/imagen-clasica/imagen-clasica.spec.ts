import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenClasicaComponent } from './imagen-clasica';

describe('ImagenClasicaComponent', () => {
  let component: ImagenClasicaComponent;
  let fixture: ComponentFixture<ImagenClasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenClasicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenClasicaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
