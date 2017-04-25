import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()
export class SettingsService {
  private SettingUrl: string = '/api/settings';

  constructor(private http: Http) { }

  getSettings(): Observable<{}> {
    return this.http.get(this.SettingUrl)
      .map((res: Response) => res.json());
		//	.catch(this.handleError);
  }

}
