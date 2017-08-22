import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir works!';
  switch = true;
  toglleSwitch(){
    this.switch = !this.switch;
  }
  forArray = [1,2,3,4,5,6,7,8,9,10];
  value = "10";
}
