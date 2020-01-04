import { FormControl } from '@angular/forms';

export class UsernameValidator {

  static validUsername(fc: FormControl){
    if(fc.value.toLowerCase() === "ven123" || fc.value.toLowerCase() === "ven123"){
      return {
        validUsername: true
      };
    } else {
      return null;
    }
  }
}
