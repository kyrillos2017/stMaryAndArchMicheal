import { Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { TranslationService } from "src/app/core/translation/translation.service";
import { DaysEnum } from "../../enums/days-enum";
import { enumToArray, GenderEnum, MassRepetationType, MassTypesEnum } from "../../enums/enums";
import { SectionsEnum } from "../../enums/general-sections-enum";
import { PrimengTableHelper } from "../../helpers/PrimengTableHelper";
import { validation_messages } from "../../helpers/validations";
import { IEnumMapping } from "../../models/response-result";


export abstract class BaseComponent {

  validation_messages = validation_messages
  primengTableHelper: PrimengTableHelper;
  MassRepetationType = MassRepetationType
  GeneralSectionsEnum = SectionsEnum
  massRepetation: IEnumMapping[];
  days: IEnumMapping[];
  massTypes: IEnumMapping[];
  genders: IEnumMapping[];
  generalSections: IEnumMapping[];
  translation: any[] = [];

  constructor(injector: Injector) {
    this.primengTableHelper = new PrimengTableHelper();
    this.massRepetation = enumToArray(MassRepetationType)
    this.days = enumToArray(DaysEnum)
    this.massTypes = enumToArray(MassTypesEnum)
    this.genders = enumToArray(GenderEnum)
    this.generalSections = enumToArray(SectionsEnum)
  }

  noTyping() {
    return false;
  }
  resetControl(form: FormGroup, controlsName: string[]) {
    controlsName.forEach((c) => {
      form.controls[c].reset();
      form.controls[c].clearValidators();
      form.controls[c].updateValueAndValidity();
    });
  }

  findArray(array: any[], key: number) {
    return array.filter(el => {
      return el.id === key
    })
  }

  findValue(array: IEnumMapping[], key: any) {
     if (key && array) {
      return array.filter((el) => {
        return el.id == key;
      })[0].name;
    } else {return null}
  }

  convertTranslation(){

  }

  translate(key: string){
    if(key){

    }

    return
  }


}
