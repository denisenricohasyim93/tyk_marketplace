import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  juan_choek : any;
  constructor(private http: HttpClient, public router : Router){
    
  }
  klikJuanChoek() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((res : any) => {
      console.log(res)
      this.juan_choek = res
    })
  }
  goToApaya() {
    this.router.navigate(['/apaya']);
  }
}
