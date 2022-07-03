import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router"



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  res: any = []
  id: any | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private router:Router,private http:HttpClient) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  public goHome(){
    this.router.navigate([''])
  }

  public goBacktoPlanet(id:any){
    this.router.navigate(['planets',id])
  }

  ngOnInit(): void {
    let id = +this.activateRoute.snapshot.params['id'];
    this.http.get(`https://swapi.dev/api/people/${id}`)
      .subscribe((response)=>{
        this.res=response
        console.log(this.res)
      })
  }
}
