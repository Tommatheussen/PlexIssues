import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'plexissues-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  setupForm: FormGroup;

  constructor(private http: Http) { }

  ngOnInit() {
    this.setupForm = new FormGroup({
      hostname: new FormControl('127.0.0.1', Validators.required),
      port: new FormControl(32400, Validators.required)
    });
  }

  setup() {
    if (this.setupForm.valid) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('/api/settings/setup', JSON.stringify({
        hostname: this.setupForm.value.hostname, port: this.setupForm.value.port
      }), { headers: headers })
        .map((res: Response) => {
          console.log(res.json());
        }).subscribe(res => {
          console.log(res);
        });
    }
  }
}
