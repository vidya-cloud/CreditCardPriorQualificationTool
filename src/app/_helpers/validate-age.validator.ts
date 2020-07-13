import { FormGroup } from '@angular/forms';

// custom validator to check if the customer is of valid age
export function ValidAge(dateofbirth: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[dateofbirth];
        // set error on dateofbirth if validation fails
        if (getAge(control.value) < 18) {
          control.setErrors({ validage: true });
        } else {
          control.setErrors(null);
        }
    }

    //Calculate the age of the 
    function getAge(dateString: string) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }



}
