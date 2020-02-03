import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.cargarMensajes().subscribe();
  }

  enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje).then(() => {
      this.mensaje = '';
    }).catch((err) => {
      console.error('error al enviar', err);
    });
  }

}
