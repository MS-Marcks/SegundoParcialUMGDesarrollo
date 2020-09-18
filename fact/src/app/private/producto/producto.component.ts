import { Component, OnInit } from '@angular/core';
import { Producto } from './../../models/producto/product';
import { ProductoService } from '../../services/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[];
  productoSeleccionado: Producto;
  productoform = {
    id: 0,
    nombre: '',
    precio: 0,
    creado_por: ''
  };
  estado: number;
  editar: boolean;
  tipo: string;
  message: string;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
    this.GetCliente();
  }

  GetCliente(): void {
    this.productoService.getCliente().subscribe(
      (res) => {
        this.productos = res;
      }, (err) => {
        console.log(err);
      }
    );
  }

  PostCliente(): void {
    this.productoSeleccionado = this.productoform;
    this.productoService.postCliente(this.productoSeleccionado).subscribe(
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
    this.productoSeleccionado = this.productoform;
    this.productoService.updateCliente(this.productoSeleccionado).subscribe(
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
    this.productoService.deleteCliente(this.productoform.id).subscribe(
        (res) => {
          this.message = res;
          this.GetCliente();
          this.OnCancelar();
        }, (err) => {
          console.log(err);
        }
      );
  }

  OnCapturarEditar(producto): void {
    this.estado = 1;
    this.tipo = 'EDITAR';
    this.editar = true;
    this.productoform = producto;
    console.log(this.productoform);
  }

  Oneliminar(id): void{
    this.estado = 2;
    this.tipo = 'ELIMINAR';
    this.editar = true;
    this.productoform.id = id;
  }

  onSubmit(): void{
    if (this.estado === 0){
      this.PostCliente();
    }else if (this.estado === 1){
      this.UpdateCliente();
    }else if (this.estado === 2){
      this.DeleteCliente();
    }
  }

  OnCancelar(): void {
    this.productoform = {
      id: 0,
      nombre: '',
      precio: 0,
      creado_por: ''
    };
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
  }

}
