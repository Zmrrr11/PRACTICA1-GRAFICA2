import { Component, signal,computed } from '@angular/core';
import { ImagenClasicaComponent } from './imagen-clasica/imagen-clasica'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImagenClasicaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
