import { StarWarsService } from './../star-wars.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {



characters1=[];
activatedRout: ActivatedRoute;
swService: StarWarsService;
loadedSide = 'all';
subscription;


  constructor(activatedRout: ActivatedRoute, swService: StarWarsService) {
    this.activatedRout = activatedRout;
    this.swService = swService;
   }

  //executes whenever angular initializes the component
  ngOnInit() {
    this.activatedRout.params.subscribe( //listen to rout changes.
      (params)=>{
        this.characters1 = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    this.subscription = this.swService.charactersChanged.subscribe(
      ()=>{
        this.characters1 = this.swService.getCharacters(this.loadedSide)
      }
    )
  }

  ngOnDestroy(){
this.subscription.unsubscribe();
  }

}
