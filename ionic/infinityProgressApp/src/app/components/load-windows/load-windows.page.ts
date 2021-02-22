import { DataService } from './../../services/data/data.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-windows',
  templateUrl: './load-windows.page.html',
  styleUrls: ['./load-windows.page.scss'],
})
export class LoadWindowsPage implements OnInit {

  constructor(private navController: NavController, private data_service: DataService) { }

  ngOnInit() {
    this.data_service.initializeUser();
    setTimeout(() => {
      this.navController.navigateRoot('/dashboard');
    }, 10000);
  }

}
