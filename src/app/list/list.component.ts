import { StarWarsService } from './../star-wars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


characters1=[];
activatedRout: ActivatedRoute;
swService: StarWarsService;


  constructor(activatedRout: ActivatedRoute, swService: StarWarsService) {
    this.activatedRout = activatedRout;
    this.swService = swService;
   }

  //executes whenever angular initializes the component
  ngOnInit() {
    //listen to rout changes.
    this.activatedRout.params.subscribe(
      (params)=>{
        this.characters1 = this.swService.getCharacters(params.side);
      }
    );
  }


}
