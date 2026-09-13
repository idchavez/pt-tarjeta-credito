import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { error, time } from 'console';
import { provideToastr, ToastrService } from 'ngx-toastr';
import { TarjetaService } from '../../services/tarjeta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta-credito',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarjeta-credito.html',
  styleUrl: './tarjeta-credito.css',
})
export class TarjetaCredito implements OnInit {
  listaTarjetas: any[] = [];
  listaTarjetasInicial: any[] = [];
  mesSeleccionado: string | null = null;

  accion = 'Agregar';
  formTarjeta: FormGroup;
  id: number | undefined;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private _tarjetaService: TarjetaService) {
    this.formTarjeta = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas ();
  }


  filtrarMes(mes: string) {
    this.mesSeleccionado = mes;

    this.listaTarjetas = this.listaTarjetasInicial.filter(
      tarjeta => tarjeta.fechaExpiracion.substring(0,2) === mes
    );
  }

  mostrarTodas() {
    this.mesSeleccionado = null;
    this.listaTarjetas = this.listaTarjetasInicial;
  }

  obtenerTarjetas() {
    this._tarjetaService.getListTarjetas().subscribe({
      next: (data) => {
      this.listaTarjetasInicial = data;
      this.listaTarjetas = data;
      console.log(data);
    },
    error: (e) => {
      console.error(e);
      this.toastr.error("No se pudieron cargar las tarjetas");
    }
    });
  }

  guardarTarjeta() {

    const tarjeta: any = {
      titular: this.formTarjeta.get('titular')?.value,
      numeroTarjeta: this.formTarjeta.get('numeroTarjeta')?.value,
      fechaExpiracion: this.formTarjeta.get('fechaExpiracion')?.value,
      cvv: this.formTarjeta.get('cvv')?.value
    }

    if (this.id == undefined) {
      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {

        this.toastr.success('La tarjeta se registro!', 'Tarjeta registrada!', { timeOut: 2000, });
        this.obtenerTarjetas();
        this.formTarjeta.reset();
      }, error => {
        this.toastr.error("Opss.. Ocurrio un error!", "Error");
        console.log(error);
      });
    } else {

      tarjeta.id = this.id;
      this._tarjetaService.updateTarjeta(this.id, tarjeta).subscribe(data => {
        this.formTarjeta.reset();
        this.accion = "Agregar";
        this.id = undefined;
        this.toastr.info("La tarjeta fue actualizada!", "Tarjeta actualizada");
        this.obtenerTarjetas();
      }, error => {
        console.log(error);
      })
    }


  }

  eliminarTarjeta(id: number) {
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      this.toastr.error("La tarjeta fue eliminada con exito!", "Tarjeta eliminada!");
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    })

  }

  editarTarjeta(tarjeta: any) {
    this.accion = "Editar";
    this.id = tarjeta.id;

    this.formTarjeta.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }
}