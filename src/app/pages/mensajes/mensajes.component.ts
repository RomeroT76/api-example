import { Component } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import { Message } from '../../domain/Message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss'
})
export class MensajesComponent {

  message = new Message()

  constructor(private messagesService: MensajesService) { }

  guardar() {
    this.messagesService.addMessage(this.message)
  }

}
