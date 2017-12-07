import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FormValidacao {

  // validacao obrigatorio
  static required = Validators.required;

  // validacao cpf
  static cpf(control: FormControl) {
    if (control.value && control.value.toString().trim() !== "" && control.value.toString().length === 11) {
      let result = {cpf: true};
      let cpf = control.value.toString();
      let sum = 0;
      let remainder;

      if(cpf.length !== 11) return result;
      if (!cpf || cpf === '') return result;
      if (cpf === '00000000000') return result;
      for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      remainder = (sum * 10) % 11;
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cpf.substring(9, 10))) return result;
      sum = 0;
      for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
      remainder = (sum * 10) % 11;
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(cpf.substring(10, 11))) return result;

      return null;
    }
    return {cpf: true};
  }

  // validacao email
  static email(control: FormControl) {
    if (control.value && control.value.trim() !== "") {
      let pattern: RegExp = /\S+@\S+\.\S+/;
      return pattern.test(control.value) ? null : {email: true};
    } else {
      return null;
    }
  }

  // validacao campo de confirmacao
  static confirm(control: FormControl) {
    let invalid = {confirm: true};
    let controlName = "";
    let parent = control.parent;
    let controlToVerirfy = null;

    if(parent) {
      Object.keys(parent.controls).forEach((name) => {
        if (control === parent.controls[name]) {
          // pegar o campo de confirmacao gerado
          if(name.indexOf('conf') > -1) {
            controlToVerirfy = parent.controls[name.replace('conf', '')];
          }
        }
      });
      if(controlToVerirfy) {
        if (control.value.trim() !== controlToVerirfy.value.trim()) {
          return invalid;
        }
      }
    }
    return null;
  }

  // validacao campo data
  static date(control: FormControl) {
    if(control.value){
      let date = new Date(control.value);
      if(date.getDate()) {
        return null;
      } else {
        return {date: true};
      }
    }
    return null;
    // let str = control.value.trim();
    // str = str.split("-")[2].split(" ")[0] + "-" + str.split("-")[1] + "-" + str.split("-")[0];
    // console.log(str);
    // let regex = /(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
    // let pattern = new RegExp(regex);
    // if (pattern.test(str)) {
    //     return null;
    // } else {
    //     return {date: true};
    // }
  }

  // validacao data igual a
  static dateEquals(control: FormControl, validation) {
    if(control.value) {
      let dateValidation = this._toDate(this._getDateValidation(validation));
      let dateValue = (control.value instanceof Date) ? control.value : this._toDate(control.value);
      if (dateValue.getTime() !== dateValidation.getTime()) {
        return {dateEquals: true}
      } else {
        return null;
      }
    }
    return null;
  }

  // validacao data maior q
  static dateHigher(control: FormControl, validation) {
    if(control.value) {
      let dateValidation = this._toDate(this._getDateValidation(validation));
      let dateValue = (control.value instanceof Date) ? control.value : this._toDate(control.value);
      if (dateValue.getTime() <= dateValidation.getTime()) {
        return {dateHigher: true}
      } else {
        return null;
      }
    }
    return null;
  }

  // validacao data menor q
  static dateLower(control: FormControl, validation) {
    if(control.value) {
      let dateValidation = this._toDate(this._getDateValidation(validation));
      let dateValue = (control.value instanceof Date) ? control.value : this._toDate(control.value);
      if (dateValue.getTime() >= dateValidation.getTime()) {
        return {dateLower: true}
      } else {
        return null;
      }
    }
    return null;
  }

  // funcao auxiliar para transformar a data de validacao no formato yyyy-mm-dd
  private static _getDateValidation(validation) {
    let dateString = validation.substr(6, 10);
    let day = dateString.split("/")[0];
    let month = dateString.split("/")[1];
    let year = dateString.split("/")[2];
    return year + "-" + month + "-" + day + " 00:00";
  }

  // funcao auxiliar para transformar datas em objeto Date
  private static _toDate(dateString){
    if(dateString instanceof Date) {
      return dateString;
    }
    let day = parseInt(dateString.split("-")[2]);
    let month = parseInt(dateString.split("-")[1]) - 1;
    let year = parseInt(dateString.split("-")[0]);
    return new Date(year, month, day);
  }
}
