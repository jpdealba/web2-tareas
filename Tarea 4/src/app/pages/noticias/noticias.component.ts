import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias: any = []
  cargando: boolean = false
  search: string = ''
  lastSearch: string = ''
  current: any ={};

  constructor(private servicioDeNoticias: NoticiaService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params["searchParam"]) {
        this.search = params["searchParam"]
        this.buscar()
      }
    });
  }

  buscar(): void {
    this.servicioDeNoticias.setCurrentSearchTerm(this.search)
    this.cargando = true;
    this.servicioDeNoticias.getNoticias(this.search).subscribe({
      next: (response) => {
        this.lastSearch = this.search;
        this.noticias = response.articles;
        this.cargando = false;
        this.search = '';
      },
      error: (err) => {
        console.log('Error: ', err);
      }
    });
  }

  selectNoticia(noticia: Noticia) {
    this.current = noticia;
    this.servicioDeNoticias.setCurrentNoticia(noticia)
  }

  clearCurrent(){
    this.current = {};
  }

  setSearch(e: any) {
    this.search = e.target.value;
    if (e.key == 'Enter') {
      this.buscar()
    }
  }

}
