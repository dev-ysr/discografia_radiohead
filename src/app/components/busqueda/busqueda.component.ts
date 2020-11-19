import { Component, OnInit } from '@angular/core';
import { Disco, DiscosService } from '../../services/discos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  discos:Disco[];
  termino:string;

  constructor(private discoService:DiscosService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params["termino"];
    });
    this.discos = this.discoService.buscarAlbum(this.termino);
  }

  


}
