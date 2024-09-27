import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pdf-generator';

  constructor(private router: Router){}

  ngOnInit(){
    console.log(this.router.url)
    if (this.router.url == "/") {
      this.router.navigate(["pdf"])
    }
  }
 
}
