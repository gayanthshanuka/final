import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-result',
  template:`
  <ngx-spinner
  bdOpacity = 0.9
  bdColor = "#fffdfd"
  size = "medium"
  color = "#4b9bc1"
  type = "timer"
  [fullScreen] = "true"
  >
  <br>
  <p style="color: #4b9bc1" > Loading... </p>
  </ngx-spinner> 
  <div class=" py-1 mb-2">
      
    <div class="jumbotron">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">FaceGEN</h1>
        <p class="lead my-3"> AI based face generator </p>
      </div>
    </div>
    </div>
    <p><img [src]="imagesh" style="align-self: center;" ></p>
    <div class ="form-group" ng-app="ngclickApp" ng-controller="ngclickCtrl" >
      
      <br>
      <br>
    </div>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private sanitizer:DomSanitizer) {}
   imagesh;
   ngOnInit() {
    this.spinner.show();
    setTimeout(()=>console.log("wait"),300);
    const image = localStorage.getItem('genImage');
    var str = image.substring(1,image.length -1);
    this.imagesh = this.sanitizer.bypassSecurityTrustResourceUrl
    (`data:image/png;base64,${str}`);  
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
  

}
