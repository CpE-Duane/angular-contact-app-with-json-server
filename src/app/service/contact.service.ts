import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  private serverURL = 'http://localhost:3000'

  public getAllContacts(): Observable<any> {
    return this.http.get<any>(`${this.serverURL}/contacts`)
  }

  public getContact(contactId: string): Observable<any> {
    return this.http.get<any>(`${this.serverURL}/contacts/${contactId}`)
  }

  public updateContact(contactId: any, payload: any): Observable<any> {
    return this.http.put<any>(`${this.serverURL}/contacts/${contactId}`, payload)
  }

  public addContact(payload: any): Observable<any> {
    return this.http.post<any>(`${this.serverURL}/contacts`, payload)
  }

  public deleteContact(contactId: any): Observable<any> {
    return this.http.delete<any>(`${this.serverURL}/contacts/${contactId}`)
  }

}
