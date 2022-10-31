import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Component({
  selector: 'app-noticia-details-page',
  templateUrl: './noticia-details-page.component.html',
  styleUrls: ['./noticia-details-page.component.scss']
})
export class NoticiaDetailsPageComponent implements OnInit {

  noticia: Noticia = {
    title: "",
    descripcion: "",
    url: ""
  }

  titulo: string = ""
  searchParam: string = ""

  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.searchParam = this.noticiaService.getCurrentSearchTerm()
    this.activatedRoute.params.subscribe((params) => {
      this.titulo = params["titulo"]
    })
    this.noticia = this.noticiaService.getCurrentNoticia()

    if (this.titulo !== this.noticia.title) {
      this.router.navigate(["/noticias"], {
        relativeTo: this.activatedRoute
      })
    }


  }


  navigateBack(): void {
    this.router.navigate(['/noticias'], { queryParams: { searchParam: this.searchParam }, replaceUrl: true });
  }
}
