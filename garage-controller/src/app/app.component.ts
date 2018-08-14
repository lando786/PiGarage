import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Garage Controller';
  public clickCount = 1;
  onClick() : void {
    console.log('clicked');
    this.clickCount = this.clickCount + 1;
  }
}
