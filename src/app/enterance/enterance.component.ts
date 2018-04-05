import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'enterance-page',
  templateUrl: './enterance.component.html',
  styleUrls: ['./enterance.component.css']
})
export class EnteranceComponent implements OnInit {

	//signupForm = new FormGroup({username: new FormControl(), password: new FormControl()});
    model = { };
    
 apiRoot: string = "../../database/user.json"; 

 
  // constructor(){ }
  	constructor(private router: Router, private http: Http) { }
  	
 	ngOnInit(){
 	}

  login (signupForm: string) {
  	console.log(signupForm,'>>>>>')
  	event.preventDefault();
   //let constructedURL= 'http://localhost:4200/'+this.apiRoot;
    this.http
      .get("/assets/database/user.json")
      .map(data => data.json())
      .subscribe(data => {
        
        console.log(data);
        if(data.name == this.model.name && data.password == this.model.pass){
            this.router.navigate(['dashboard']);
        }else{
            console.log('Came INside else condition-> go to home page');
            this.router.navigate(['/']);
        }
        
      });
  	
  }
  // This issue to be fixed later where data is not cleared after close
 // reset () {
   // this.model.name = "";
//    this.model.pass = "";
  //}
}
