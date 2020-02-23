import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams); // for getting the queryParams values
    console.log(this.route.snapshot.fragment); // for getting the fragment values

    const id = +this.route.snapshot.params['id']; // converting string to number
    console.log('id: ', id);

    this.route.queryParams.subscribe(
      (params: Params) => {
        console.log('changed queryParams :', params);
      }
    );

    this.route.fragment.subscribe(
      (fragment: string) => {
        console.log('changed fragment :', fragment);
      }
    );

    this.route.params.subscribe(
      (pathParams: Params) => {
        console.log('changed path params :', pathParams);
      }
    );
  }

}
