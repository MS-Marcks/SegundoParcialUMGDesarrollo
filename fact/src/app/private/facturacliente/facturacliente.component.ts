import { Component, OnInit } from '@angular/core';
import { Factura } from './../../models/factura/factura';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente/cliente';

@Component({
  selector: 'app-facturacliente',
  templateUrl: './facturacliente.component.html',
  styleUrls: ['./facturacliente.component.css']
})
export class FacturaclienteComponent implements OnInit {

  facturas: Factura[];
  ClienteSelccionado: Cliente;
  constructor(private clienteService: ClienteService,private routes: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('factura');
    this.ClienteSelccionado = JSON.parse(localStorage.getItem('cliente'));
    this.GetFactura();
  }

  GetFactura(): void {
    this.clienteService.getFacturas(JSON.parse(localStorage.getItem('cliente')).id).subscribe(
      (res) => {

        this.facturas = res;

      }, (err) => {
        console.log(err);
      }
    );
  }
  OnProductos(factura): void {
    localStorage.setItem('factura', JSON.stringify(factura));
    this.routes.navigate(['cliente/factura/detalle']);
  }
}
