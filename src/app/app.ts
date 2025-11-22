import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Footer} from './custom-components/footer/footer';
import {Header} from './custom-components/header/header';
import {About} from './custom-components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
