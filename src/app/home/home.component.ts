import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidAge } from '../_helpers/validate-age.validator'
import { FormatDate } from '../_helpers/dataeConverter'
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//Home component
export class HomeComponent implements OnInit {
  public loading = false;
	constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  //Initialize the form fields and set validators using reactive form validtors
  //Place to initiate custom validators
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['Mr', Validators.required],
      firstName: ['John', [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern(/^[a-zA-Z]*$/)]],
      lastName: ['Doe', [Validators.required, Validators.minLength(3), Validators.maxLength(16), Validators.pattern(/^[a-zA-Z]*$/)]],
      dateofbirth: ['1991-01-01', [Validators.required, Validators.minLength(10)]],
      annualIncome: ['40000', [Validators.required, Validators.maxLength(8), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    },
    {
      //Custom validtion to get the age of the customer
      validator: ValidAge('dateofbirth')
    })
  }

  registerForm: FormGroup;
  submitted = false;

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // navigate to another form values on success
    this.apiService.getCardTypeEligibleforCustomer(this.firstname.value, this.lastname.value,
      FormatDate(this.dateofbirth.value), this.annualincome.value).subscribe((data: any)=>{
        this.loading = false;
        this.router.navigate(['/fetch-card'], data);
    })
  }

  //retrieve form values
  get firstname() { return this.registerForm.get('firstName'); }
  get lastname() { return this.registerForm.get('lastName'); }
  get dateofbirth() { return this.registerForm.get('dateofbirth'); }
  get annualincome() { return this.registerForm.get('annualIncome'); }
  
  //Reset the values if clicked cancel
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
