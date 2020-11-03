import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PagamentiService } from '../serivces/http/pagamenti.service';
import { ClieFornService } from '../serivces/http/clie-forn.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form: FormGroup;
  loading = false;
  serverMessage: string;
  pagamenti;

  constructor(
    public dialogRef: MatDialogRef<NewComponent>,
    private fb: FormBuilder,
    private PagamentiService: PagamentiService,
    private ClieFornService: ClieFornService,
  ) { }

  ngOnInit() {
    this.PagamentiService.getPagamenti()
      .then(pagamenti => {
        this.pagamenti = pagamenti;
      });

    this.form = this.fb.group({
      ragione: [
        '',
        [Validators.required],
      ],
      pagamento: [
        '',
        []
      ]
    });
  }

  get ragione() {
    return this.form.get('ragione');
  }
  get pagamento() {
    return this.form.get('pagamento');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.loading = true;
    this.ClieFornService.createClieForn({
      tipo: "C",
      ragione_sociale: this.ragione.value,
      pagamento: this.pagamento.value
    }).subscribe(
      result => {
        console.log(result);
        this.loading = false;
        this.dialogRef.close();
      }
    );
  }

}
