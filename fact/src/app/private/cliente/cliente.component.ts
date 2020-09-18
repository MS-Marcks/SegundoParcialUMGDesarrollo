import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../models/cliente/cliente';
import { ClienteService } from './../../services/cliente/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];
  clienteSeleccionado: Cliente;
  clienteform = {
    id: 0,
    nombre: '',
    direccion: '',
    nit: '',
    creado_por: ''
  };
  estado: number;
  editar: boolean;
  tipo: string;
  message: string;

  constructor(private clienteService: ClienteService, private routes: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('factura');
    localStorage.removeItem('cliente');
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
    this.GetCliente();
  }

  GetCliente(): void {
    this.clienteService.getCliente().subscribe(
      (res) => {
        this.clientes = res;
      }, (err) => {
        console.log(err);
      }
    );
  }

  PostCliente(): void {
    this.clienteSeleccionado = this.clienteform;
    this.clienteService.postCliente(this.clienteSeleccionado).subscribe(
      (res) => {
        this.message = res;
        this.GetCliente();
        this.OnCancelar();
      }, (err) => {
        console.log(err);
      }
    );
  }
  UpdateCliente(): void {
    this.clienteSeleccionado = this.clienteform;
    this.clienteService.updateCliente(this.clienteSeleccionado).subscribe(
      (res) => {
        this.message = res;
        this.GetCliente();
        this.OnCancelar();
      }, (err) => {
        console.log(err);
      }
    );
  }

  DeleteCliente(): void {
    this.clienteService.deleteCliente(this.clienteform.id).subscribe(
      (res) => {
        this.message = res;
        this.GetCliente();
        this.OnCancelar();
      }, (err) => {
        console.log(err);
      }
    );
  }

  OnCapturarEditar(cliente): void {
    this.estado = 1;
    this.tipo = 'EDITAR';
    this.editar = true;
    this.clienteform = cliente;
  }

  Oneliminar(id): void {
    this.estado = 2;
    this.tipo = 'ELIMINAR';
    this.editar = true;
    this.clienteform.id = id;
  }

  onSubmit(): void {
    if (this.estado === 0) {
      this.PostCliente();
    } else if (this.estado === 1) {
      this.UpdateCliente();
    } else if (this.estado === 2) {
      this.DeleteCliente();
    }
  }

  OnCancelar(): void {
    this.clienteform = {
      id: 0,
      nombre: '',
      direccion: '',
      nit: '',
      creado_por: ''
    };
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
  }
  OnFacturas(cliente): void {
    localStorage.setItem('cliente', JSON.stringify(cliente));
    this.routes.navigate(['cliente/factura']);
  }
}
