import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() peliculas: any[] = [];
  @Input() titulo: String;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  verPelicula(item: any) {
    this.router.navigate(["/movie", item.id]);
  }
}
