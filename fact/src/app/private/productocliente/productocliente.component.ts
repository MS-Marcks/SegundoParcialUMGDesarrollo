import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { DetalleFactura } from 'src/app/models/detalleFactura/detallefactura';
import { Factura } from './../../models/factura/factura';
import { Cliente } from 'src/app/models/cliente/cliente';


@Component({
  selector: 'app-productocliente',
  templateUrl: './productocliente.component.html',
  styleUrls: ['./productocliente.component.css']
})
export class ProductoclienteComponent implements OnInit {
  detalle: DetalleFactura[];
  factura: Factura;
  cliente: Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {


    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.factura = JSON.parse(localStorage.getItem('factura'));
    this.GetProductos();
  }

  GetProductos(): void {
    this.clienteService.getProductos(this.factura.id).subscribe(
      (res) => {
        this.detalle = res;
      }, (err) => {
        console.log(err);
      }
    );
  }
}
