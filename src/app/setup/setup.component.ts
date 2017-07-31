import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';

import { Router } from '@angular/router';

@Component({
  selector: 'plexissues-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  setupForm: FormGroup;

  constructor(private http: Http, private router: Router) { }

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
        .subscribe(res => {
          this.router.navigate(['/login']);
        });
    }
  }
}
