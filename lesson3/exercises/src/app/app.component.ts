import { Component } from '@angular/core';
//import { dir } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  saveColor = null;

  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
 }

  handleLand() {
    window.alert('The shuttle is landing.  Landing gear engaged.');
  
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    this.takeOffEnabled = true;
  }

  handleAbort() {
    let result = window.confirm('Are you sure you want to abort the shuttle mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Mission aborted.';
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction){
    if (direction === 'right'){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }

    if (direction === 'left'){
      rocketImage.style.left = parseInt(rocketImage.style.left) - 10 + 'px';
      this.width = this.width - 10000;
    }

    if (direction === 'up') {
      rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + 'px';
      this.height = this.height + 10000;
    }

    if (direction === 'down'){
      rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10 + 'px';
      this.height = this.height - 10000;
    }

    console.log("rocketImage.style.left " + rocketImage.style.left + " rocketImage.style.bottom " + rocketImage.style.bottom);
    this.checkEdges(rocketImage);
  }

  checkEdges(rocketImage){
    if (parseInt(rocketImage.style.left) > 75 || parseInt(rocketImage.style.left) < 0 || parseInt(rocketImage.style.bottom) > 320 || parseInt(rocketImage.style.bottom) < 0) {
      this.color = 'orange';
    }
    else {
      this.color = 'blue';
    }
  }
}