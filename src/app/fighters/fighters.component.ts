import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss']
})
export class FightersComponent implements OnInit {

  constructor(private data: DataService) {

    fighters$: Object;
  }

  ngOnInit() {
    this.data.getFighters().subscribe(
      data => this.fighters$ = data
    )
  }
}
