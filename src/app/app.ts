import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Imc } from './sections/imc/imc';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Imc],
  template: `
  <app-header></app-header>
    <main>
    <app-imc></app-imc>
    </main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'examen';
}
