import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Noticia } from '../interfaces/noticia';
@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private noticia: Noticia = {
    title: "",
    descripcion: "",
    url: "",
  }

  seachTerm: string = ""

  constructor(private http: HttpClient) { }

  getNoticias(q: string): Observable<any> {
    const url = `${environment.apiUrl}everything?q=${q}&sortBy=publishedAt&apiKey=${environment.apiKey}`;
    return this.http.get(url)
  }

  setCurrentNoticia(noticia: Noticia) {
    this.noticia = noticia;
    localStorage.setItem("noticia", JSON.stringify(noticia))
  }

  getCurrentNoticia(): Noticia {
    if (!this.noticia.title) {
      const noticia = localStorage.getItem("noticia") || '{}'
      this.noticia = JSON.parse(noticia)
    }
    return this.noticia;
  }

  setCurrentSearchTerm(seachTerm: string): void {
    this.seachTerm = seachTerm
  }

  getCurrentSearchTerm(): string {
    return this.seachTerm
  }

}
