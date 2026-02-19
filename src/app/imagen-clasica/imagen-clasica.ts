import { Component, signal,computed, Signal } from '@angular/core';

@Component({
  selector: 'app-imagen-clasica',
  standalone: true,
  templateUrl: './imagen-clasica.html',
  styleUrl: './imagen-clasica.css',
})
export class ImagenClasicaComponent {
  clasico = signal<boolean>(false);
  brillo = computed(() => this.clasico() ? 120 : 100);
  contraste = computed(() => this.clasico() ? 150 : 100);
  gris = computed(() => this.clasico() ? 100 : 0);

  actualizado = computed(() => {
    return `brightness(${this.brillo()}%) contrast(${this.contraste()}%) grayscale(${this.gris()}%)`;
  });
  toggleEfecto(): void {
    this.clasico.update(estado => !estado);
  }
}

