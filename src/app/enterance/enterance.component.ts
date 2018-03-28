import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'enterance-page',
  templateUrl: './enterance.component.html',
  styleUrls: ['./enterance.component.css']
})
export class EnteranceComponent implements OnInit {

	signupForm = new FormGroup({username: new FormControl(), password: new FormControl()});
 
  // constructor(){ }
  	constructor(private router: Router) { }
  	
 	ngOnInit(){
 	}

  login (signupForm: any,event: Event) {
  	console.log(signupForm,'>>>>>')
  	//event.preventDefault();
  	//if(signupForm.username =){
  		 this.router.navigate(['dashboard']);
  	//}
  }
}
