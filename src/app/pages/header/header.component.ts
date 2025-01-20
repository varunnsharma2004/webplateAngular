import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StoreService } from '../../Service/store.service';
import { AppService } from '../../Service/app.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private data:StoreService,private appService:AppService,private route: Router,private messageService: MessageService){}

  callAllUser()
  {
    this.appService.getAllUser();
  }
  callAllProduct()
  {
    this.appService.getAllProducts();
  }
  logout()
  {
    this.messageService.add({ severity: 'warn', summary: 'Log Out', detail: ' Log Out' });
  
    this.data.removeProduct();
    this.data.removeProfile();
    this.data.removeTokan();
    this.data.removeUsers();
this.route.navigate(['login']);
  }
}
