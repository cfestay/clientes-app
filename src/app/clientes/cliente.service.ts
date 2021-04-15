import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  getClientes():Cliente[]{
    return CLIENTES;

  }

  constructor() { }
}
