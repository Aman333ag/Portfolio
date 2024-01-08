import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
    var options = {
      strings: ['Web Developer', 'Freelancer'],
      typeSpeed: 75,
      backSpeed: 55,
      loop: true,
    };

    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}
