import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" routerLink="/instruction">FaceGEN</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" routerLink="/home">Try now </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/intro">About - Us</a>
      </li>
    </ul>
  </div>
</nav>
<router-outlet></router-outlet>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}
