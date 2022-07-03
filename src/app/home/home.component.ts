import { Component } from '@angular/core';
import { Router } from "@angular/router"
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  planets: any = [];
  title = 'STAR WARS APP';
  constructor(private http:HttpClient,private router:Router) {
  }
  public goToPlanet(id:any){
    this.router.navigate(['planets',id])
  }

  ngOnInit(): void {
    for(let i=1;i<=6;i++)
    {
      this.http.get(`https://swapi.dev/api/planets/?page=${i}`)
        .subscribe((response)=>{
          this.planets.push(response);
          console.log(this.planets)
        })
    }
  }
}

