import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

import { Settings } from '@models';
import { map } from 'rxjs/operators';
@Injectable()
export class SettingsService {
  private SettingUrl: string = '/api/settings';

  constructor(private http: Http) {}

  getSettings(): Observable<Settings> {
    return this.http.get(this.SettingUrl).pipe(map((res: Response) => res.json() as Settings));
    //	.catch(this.handleError);
  }
}
