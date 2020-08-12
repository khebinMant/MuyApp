/*import { AbstractControlOptions } from '@angular/forms';

export class ValidateEmail {
  static createValidator(registerService: RegisterService) {
    return (control: AbstractControlOptions) => {
      return registerService.findByEmail(control.value).pipe(map(res => {
        return res ? { emailTaken: true } : null;

        // I also tried the below if/else statement, but it changes nothing
        // if(res){
        //   return ({emailTaken: true});
        // } else {
        //   return (null);
        // }

      }));
    }
  }
}*/
