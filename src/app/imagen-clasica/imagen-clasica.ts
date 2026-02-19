import { Component, signal, computed, Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-imagen-clasica',
  standalone: true,
  templateUrl: './imagen-clasica.html',
  styleUrl: './imagen-clasica.css',
})
export class ImagenClasicaComponent {

  brillo: WritableSignal<number> = signal(100);
  contraste: WritableSignal<number> = signal(100);
  gris: WritableSignal<number> = signal(0);

  actualizado: Signal<string> = computed(() => {
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) grayscale(${this.gris()}%)`;
  });

  toggleEfecto(): void {
    if (this.gris() === 0) {
      this.gris.set(100);
      this.brillo.set(200);
      this.contraste.set(200);
    } else {
      this.gris.set(0);
      this.brillo.set(100);
      this.contraste.set(100);
    }
  }
}