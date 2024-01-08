import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"HTML5, CSS3",percent:80,remark:'very-good'}, {name:"C#, ASP.NETCore, DotNET7",percent:70,remark:'good'},{name:"MS SQL",percent:70,remark:'good'},{name:"TypeScript, JavaScript",percent:70,remark:'good'}, {name:"Angular15, Bootstrap, AngularMaterial", percent:80,remark:'very-good'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Visual Studio, VS Code",percent:75,remark:'good'},{name:"SQL Server Management Studio",percent:70,remark:'good'},{name:"Swagger",percent:85,remark:'excellent'},{name:"Azure & Web Services",percent:70,remark:'good'}],
    methodologies:[{name:"Scrum",percent:70,remark:'good'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:50,remark:'average'}]
  };



  ngOnInit(): void {
  }

}




