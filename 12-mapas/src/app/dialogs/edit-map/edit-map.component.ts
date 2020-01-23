import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-map',
  templateUrl: './edit-map.component.html',
  styleUrls: ['./edit-map.component.css']
})
export class EditMapComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditMapComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      titulo: this.data.titulo,
      desc: this.data.desc
    });
  }

  guardarCambios() {
    this.dialogRef.close(this.form.value);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
