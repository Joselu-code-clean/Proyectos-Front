import { User } from './../../models/user.class';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-setting-user',
  templateUrl: './setting-user.page.html',
  styleUrls: ['./setting-user.page.scss'],
})
export class SettingUserPage implements OnInit, OnDestroy {
  
  public currentUser: User = new User();

  constructor(private menu: MenuController, private auth: AuthService) {
    setTimeout(() => {
      console.log(auth.getCurrentUser());
      this.currentUser = auth.getCurrentUser();
      console.log(this.currentUser);
    }, 500);

  }

  ngOnInit() {
    this.menu.enable(false);
  }

  ngOnDestroy(){
    this.menu.enable(true);
  }


}
