import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./auth/login/login.component";
import { Toast } from 'primeng/toast';
import { ProfileComponent } from "./pages/profile/profile.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Toast, CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, LoginComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = '';

  msg = '';

  onClick() {
    this.msg = 'Welcome ' + this.text;
  }
}
