import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { StoreService } from '../../Service/store.service';
import { AppService } from '../../Service/app.service';
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TableModule, HeaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  userData:any=[]
  constructor(private data:StoreService,private appService:AppService)
  {  
// this.appService.ProfileData.subscribe((res)=>{
//   this.userData=res;
// })
this.userData=data.getMyProfile();
console.log(this.userData,'dafs')
  }

 
}