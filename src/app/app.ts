import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entorno } from './entorno/entorno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entorno],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-entornos');
}
