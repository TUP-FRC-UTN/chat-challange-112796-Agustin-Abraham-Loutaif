import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [],
  templateUrl: './mensaje-usuario.component.html',
  styleUrl: './mensaje-usuario.component.css'
})
export class MensajeUsuarioComponent {
  
  @Input() user : string = ""
  @Output() mensaje = new EventEmitter<Message>();
  texto = ""
  
  definirMensaje(event : any){
    this.texto = event.target.value
  }
  
  guardarMensaje(){
    if (this.texto !== ""){
      const cuerpoMessage : Message = {
         User: this.user,
         Mensaje: this.texto
       }
       
       this.mensaje.emit(cuerpoMessage)
       this.texto = ""
    }
  }
}
