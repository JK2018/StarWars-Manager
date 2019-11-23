import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input ()character2;
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
   }


  ngOnInit() {
  }

  onAssign(side){
    this.swService.onSideChosen({name: this.character2.name, side: side});
  }

}
