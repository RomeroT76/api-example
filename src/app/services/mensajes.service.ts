import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Message } from '../domain/Message';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private firestore: Firestore) { }

  addMessage(message: Message) {
    addDoc(collection(this.firestore, 'messages'), Object.assign({}, message))
  }
}
