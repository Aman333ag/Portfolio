import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']

})
export class CurriculumVitaeComponent implements OnInit {

  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

   experiences = [
    {
        title: "Freelance developer",
        company: 'Techozeano',
        period: "2020 - 2021 (5 months)",
        technologies: 'HTML, CSS, Angular 11, Angular Materials',
        missions: [
            "Implementation of a Pages (colors, layout).",
            "Development of a resource saving interface.",
            "Creating customizable web pages.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Freelance developer",
        company: 'GeekYodha',
        period: "2020 - 2021 (2 months)",
        technologies: 'AngularJS, C#, .NET, LINQ',
        missions: [
            "Development of a web application for survey programmer.",
            "Evolutionary and corrective maintenance of application.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Software Developer",
        company: 'SAGO',
        period: "2021 - Currently working",
        technologies: 'Angular15, AngularJS, ASP.NETCore, DotNet7, C#, SQL Server, LINQ, SWAGGER',
        missions: [
            "Development of new features.",
            "Improving an application for creating prevention plans.",
            "Error fixing.",
            "Sudden issues on production."
        ],
        detailIsDisplayed: false,
    },
];


  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

  detailOnClick(experiences:any) {
    experiences.detailIsDisplayed=!experiences.detailIsDisplayed;
  }


}
