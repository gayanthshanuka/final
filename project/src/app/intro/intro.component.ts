import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-intro",
  templateUrl:'./intro.component.html',
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();
    
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }
}
3