import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AutenticacionService } from '../services/_ServiceAuth/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public _auth: AutenticacionService) { }

  ngOnInit() {
  }



}
