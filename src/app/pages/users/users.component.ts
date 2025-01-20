import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TableModule } from 'primeng/table';
import { StoreService } from '../../Service/store.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HeaderComponent,TableModule,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users:any=[];
  userFilter:any=[];
  searchUser:any;
  constructor(private data:StoreService){
this.users=data.getUsers();
this.userFilter=this.users.users;
debugger;
  }

  filterUser() {
    console.log(this.searchUser);
  
     if (!this.searchUser.trim()) {
      
      this.userFilter = this.users.users;
    } else {
      this.userFilter = this.users.users.filter((rs: any) => { 
        return rs.firstName && rs.firstName.toLowerCase().includes(this.searchUser.toLowerCase());
      });
    }
  }
  
}
