import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BigDataValidateService {
  constructor(private readonly http: HttpClient) {}

  private plsDontAbuse = 'bdc_3e4932aa909548fe88db59139041f60b';
  private baseUrl = 'https://api-bdc.net/data';

  validateEmail(email: string): Observable<{ isValid: boolean }> {
    return this.http.get<{ isValid: boolean }>(
      `${this.baseUrl}/email-verify?emailAddress=${email}&key=${this.plsDontAbuse}`
    );
  }

  validatePhone(phone: string): Observable<{ isValid: boolean }> {
    return this.http.get<{ isValid: boolean }>(
      `${this.baseUrl}/phone-number-validate?number=${phone}&countryCode=my&localityLanguage=en&key=${this.plsDontAbuse}`
    );
  }
}
