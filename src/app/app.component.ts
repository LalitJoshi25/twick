import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_proj';
  
  func1(){
    // router.navigateByUrl('/user-list');
    window.location.href = "/user-list"
  }
}