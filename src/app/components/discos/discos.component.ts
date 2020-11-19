import { Component, OnInit } from '@angular/core';
import { DiscosService, Disco } from "./../../services/discos.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html'
})
export class DiscosComponent implements OnInit {

  discos:Disco[];

  constructor(private discosService:DiscosService, private router:Router) { 
    this.discos = this.discosService.getDiscos();
  }

  ngOnInit(): void {
  }

  buscarAlbum(termino:string){
    this.router.navigate(['busqueda', termino]);
  }

}
