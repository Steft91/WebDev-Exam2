import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class Imc {
  peso = signal(40); 
  altura = 1.61; 

  get bmi(): number {
    const imc = this.peso() / (this.altura * this.altura);
    return Math.round(imc * 10) / 10;
  }

  get category(): string {
    const bmi = this.bmi;
    if (bmi < 18.5) return 'bajo-peso';
    if (bmi < 24.9) return 'normal';
    if (bmi < 29.9) return 'sobrepeso';
    return 'obesidad';
  }

  incrementar() {
    this.peso.update(p => p + 1);
  }

  decrementar() {
    this.peso.update(p => (p > 40 ? p - 1 : p));
  }

  reiniciar() {
    this.peso.set(40);
  }
}