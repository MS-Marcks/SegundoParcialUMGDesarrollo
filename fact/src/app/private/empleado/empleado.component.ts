import { Component, OnInit } from '@angular/core';
import { Empleado } from './../../models/empleado/empleado';
import { EmpleadoService } from './../../services/empleado/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleados: Empleado[];
  empleadoSeleccionado: Empleado;
  empleadoform = {
     id: 0,
     nombre: '',
     codigo: '',
     salario: 0,
     creado_por: ''
  };
  estado: number;
  editar: boolean;
  tipo: string;
  message: string;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
    this.GetCliente();
  }

  GetCliente(): void {
    this.empleadoService.getCliente().subscribe(
      (res) => {
        this.empleados = res;
      }, (err) => {
        console.log(err);
      }
    );
  }

  PostCliente(): void {
    this.empleadoSeleccionado = this.empleadoform;
    this.empleadoService.postCliente(this.empleadoSeleccionado).subscribe(
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
    this.empleadoSeleccionado = this.empleadoform;
    this.empleadoService.updateCliente(this.empleadoSeleccionado).subscribe(
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
    this.empleadoService.deleteCliente(this.empleadoform.id).subscribe(
        (res) => {
          this.message = res;
          this.GetCliente();
          this.OnCancelar();
        }, (err) => {
          console.log(err);
        }
      );
  }

  OnCapturarEditar(empleado): void {
    this.estado = 1;
    this.tipo = 'EDITAR';
    this.editar = true;
    this.empleadoform = empleado;
  }

  Oneliminar(id): void{
    this.estado = 2;
    this.tipo = 'ELIMINAR';
    this.editar = true;
    this.empleadoform.id = id;
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
    this.empleadoform = {
      id: 0,
      nombre: '',
      codigo: '',
      salario: 0,
      creado_por: ''
   };
    this.estado = 0;
    this.tipo = 'GUARDAR';
    this.editar = false;
  }

}
