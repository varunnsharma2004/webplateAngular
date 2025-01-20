import { Injectable } from '@angular/core';
import { CallService } from './call.service';
import { StoreService } from './store.service';
import { BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  userData: BehaviorSubject<any> = new BehaviorSubject(null)

  ProfileData: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(
    private call: CallService,
    private data: StoreService,
    private messageService: MessageService,
    private route: Router
  ) {

  }

  loginCall(data: any) {
    this.call.login(data).subscribe({
      next: (response: any) => {
        let tokan = response?.accessToken;
        this.data.setTokan(tokan);
        this.userData.next(response);
        console.log(this.userData.value)
        this.getProfileData(tokan);

        console.log(this.ProfileData.value, 'asklfsdh')
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
        console.log('Login failed:', error.message);
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Login Successfull' });
      },
    });

  }
  getProfileData(token: any) {
    if (token != '') {
      this.call.getProfile(token).subscribe({
        next: (res) => {
          res = Array.isArray(res) ? res : [res];
          this.ProfileData.next(res);
          this.data.setProfile(res);
          this.route.navigate(['Profile'])
        },
        
      });
    }
  }
  getAllUser() {
    this.call.getUsers().subscribe({
      next: (res) => {
        this.data.setUsers(res);
        this.route.navigate(['Users'])

      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: ' Data Not Found' });
        console.log('Not Found:', error.message);
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Fatching Successfull' });
      },
    })
  }

  getAllProducts()
  {
    this.call.getProducts().subscribe({
      next:(res)=>
      {
        res = Array.isArray(res) ? res : [res];
        this.data.setProduct(res);
        this.route.navigate(['product']);
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: ' Data Not Found' });
        console.log('Not Found:', error.message);
      },
      complete: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Products Fatching Successfull' });
      },
    })
  }

  isAuthenticated(): boolean {
    
    const token = this.data.getTokan();
    return token != null;  
  }
}
