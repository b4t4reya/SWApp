import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router"


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})

export class PlanetsComponent {
  resp: any;
  persons: any = [];
  showArray: any = this.persons;
  male: any = this.showMale(this.persons)
  female: any = this.showFemale(this.persons)
  id: number | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute,private router:Router,private http:HttpClient){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }
  public goToPerson(id:any,){
    this.router.navigate(['person',id])
  }
  public goHome(){
    this.router.navigate([''])
  }

  public showAll(person:any){
    console.log(person)
    return person
  }

  public showMale(person:any){
    let temp:any=[]
    for(let i=0;i<person.length;i++)
    {
      if (person[i].gender==="male"){
        temp.push(person[i])
      }
    }
    console.log(temp)
    return temp
  }
  public showFemale(person:any){
    let temp:any=[]
    for(let i=0;i<person.length;i++)
    {
      if (person[i].gender==="female"){
        temp.push(person[i])
      }
    }
    console.log(temp)
    return temp
  }

  ngOnInit(): void {
    let id = +this.activateRoute.snapshot.params['id'];
    this.http.get(`https://swapi.dev/api/planets/${id}`)
      .subscribe((response)=>{
        this.resp=response

        for(let i=0;i<this.resp.residents.length;i++){
          this.http.get(`${this.resp.residents[i]}`)
            .subscribe((response)=>{
              this.persons.push(response);
            })
        }
      })
  }
}

