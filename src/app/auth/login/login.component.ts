import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { AppService } from '../../Service/app.service';
import { StoreService } from '../../Service/store.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Message,InputTextModule,FloatLabelModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(private appService:AppService,private data:StoreService)
  {
    this.loginForm=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
    let tokan=this.data.getTokan();
    appService.getProfileData(tokan);
  }

  loginUser()
  {
    if(this.loginForm.valid)
    {
    
      this.appService.loginCall(this.loginForm.value);
    }
  }
}
