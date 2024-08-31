import { Component, OnInit } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { Message } from '../models/message';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent implements OnInit{
  chat : Message[] = []  
  users : string[] = []

  ngOnInit(): void {
    this.users = [ "Pepe","Maria" ]
  }

  onMensaje(mensaje : Message){
    this.chat.push(mensaje);
  }

  definirClase(User : string){
    return{
      'rojo': User == 'Pepe',
      'azul' : User == 'Maria'
    }
  }
}
