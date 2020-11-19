import { Component, OnInit } from '@angular/core';
import { DiscosService, Disco } from "./../../services/discos.service";

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html'
})
export class DiscosComponent implements OnInit {

  discos:Disco[];

  constructor(private discosService:DiscosService) { 
    this.discos = this.discosService.getDiscos();
    this.discos.sort(( a, b ) => parseInt(a.id)  - parseInt(b.id));
    console.log(this.discos);
  }

  ngOnInit(): void {
  }

}
