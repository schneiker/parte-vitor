import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserir-nome',
  standalone: true,
  imports: [
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    CommonModule
  ],
  templateUrl: './inserir-nome.component.html',
  styleUrl: './inserir-nome.component.css'
})
export class InserirNomeComponent {
  nome = '';

  constructor(public dialogRef: MatDialogRef<InserirNomeComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  confirmar(): void {
      this.dialogRef.close(this.nome);
  }
}
