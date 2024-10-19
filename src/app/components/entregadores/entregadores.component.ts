import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AtribuindoEntregadorComponent } from '../atribuindo-entregador/atribuindo-entregador.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-entregadores',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './entregadores.component.html',
  styleUrl: './entregadores.component.css'
})
export class EntregadoresComponent {
  title = 'angular-dialog';
  constructor(private matDialog:MatDialog){}
  openDialog(){
    this.matDialog.open(AtribuindoEntregadorComponent,{
      width:'350px',
    })
  }
}
