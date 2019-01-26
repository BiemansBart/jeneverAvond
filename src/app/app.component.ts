import {Component, Inject, OnInit} from '@angular/core';
import {JeneverService} from './service/jenever.service';
import {Jenever} from '../Jenever';
import {LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jeneverAvond';
  jeneverList: Jenever[];
  constructor(private service: JeneverService, @Inject(LOCAL_STORAGE) private localStorage: StorageService) {
  }

  ngOnInit(): void {
    this.service.getJenevers().subscribe(x => {
    this.jeneverList = x as Jenever[];
    console.log(this.jeneverList[0].naam);
      },
      error1 => console.log(error1));
  }
}
