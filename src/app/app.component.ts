import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { ErikaComponent } from './pages/erika/erika.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajesComponent, ErikaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-firebase';
}
