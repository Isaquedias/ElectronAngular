import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'electron-angular19';

  constructor(
    private electronService: ElectronService
  ) { }

  ngOnInit(): void {
    console.log('isElectron: ', this.electronService.isElectron);
    console.log('Electron ipcRenderer: ', this.electronService.ipcRenderer);
    // console.log('NodeJS childProcess: ', 'this.electronService.childProcess');
  }
}
