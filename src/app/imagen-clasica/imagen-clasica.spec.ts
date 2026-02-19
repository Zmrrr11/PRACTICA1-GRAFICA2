import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenClasica } from './imagen-clasica';

describe('ImagenClasica', () => {
  let component: ImagenClasica;
  let fixture: ComponentFixture<ImagenClasica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenClasica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenClasica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
