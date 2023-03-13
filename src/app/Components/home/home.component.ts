import { Component } from '@angular/core';
import { DataClass } from 'src/app/Models/data-class';
import { TrackInfo } from 'src/app/Models/track-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // property
 public user:string="Ahmed"

  // class

  // property => DataClass
  dataClass:DataClass=new DataClass("ITI","https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg",["item1","item2","item3","item4"]);


  // interface
track:TrackInfo={
  trackName:".Net Track",
  brachName:"Sohag",
  braches:["Qena","Sohag","Smart"],
  trackLogo:"https://api.nuget.org/v3-flatcontainer/system.diagnostics.tracing/4.3.0/icon"

};

// Day2
userFeedback:string="Very Good"
func1(){
  console.log("Hello from button");

}

showImg:boolean=true;
toggleImg(){

  this.showImg=!this.showImg;
}
}
