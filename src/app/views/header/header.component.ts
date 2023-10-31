import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: string;
  constructor() { }

  public ngOnInit(): void {
    this.user = sessionStorage.getItem('idUsuario');

  }

  public getOut(): void {
    sessionStorage.removeItem('idUsuario');
    window.location.reload();
  }

}
