import { Component, Input, OnInit } from '@angular/core';
import { Disco } from "../../../services/discos.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-disco',
  templateUrl: './card-disco.component.html'
})
export class CardDiscoComponent implements OnInit {

  @Input() disco:Disco;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verDisco(){
    this.router.navigate( ['/disco', this.disco.id] );
  }

}
