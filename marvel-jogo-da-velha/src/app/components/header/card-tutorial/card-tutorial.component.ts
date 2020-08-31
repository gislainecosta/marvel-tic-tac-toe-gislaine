import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header.service';

@Component({
  selector: 'app-card-tutorial',
  templateUrl: './card-tutorial.component.html',
  styleUrls: ['./card-tutorial.component.css']
})
export class CardTutorialComponent implements OnInit {

  constructor(private HeaderService: HeaderService) { }

  ngOnInit(): void {}

  fecharTutorial(): void {
    this.HeaderService.fecharTutorial()
  }
}
