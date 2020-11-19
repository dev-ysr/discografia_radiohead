import { Component, OnInit } from '@angular/core';
import { Disco, DiscosService } from 'src/app/services/discos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html'
})
export class DiscoComponent implements OnInit {

  disco:Disco;
  existeDisco:boolean;

  constructor( private activatedRoute:ActivatedRoute, private discosService:DiscosService) { 

    this.activatedRoute.params.subscribe( params=> {

      if (this.discosService.getDisco(params['id'])) {
        this.disco = this.discosService.getDisco(params['id']);
        this.existeDisco = true;
      } else{
        this.existeDisco = false;
      }
      
    })

  }

  ngOnInit(): void {
  }

}
