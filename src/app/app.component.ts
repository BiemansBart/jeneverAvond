import {Component, OnInit} from '@angular/core';
import {JeneverService} from './service/jenever.service';
import {Observable} from 'rxjs';
import {Jenever} from '../Jenever';
import {AngularFireList} from '@angular/fire/database';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jeneverAvond';

  constructor() {
  }

  ngOnInit(): void {


  }


}
