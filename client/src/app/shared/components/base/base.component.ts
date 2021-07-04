import { Injector } from "@angular/core";
import { PrimengTableHelper } from "../../helpers/PrimengTableHelper";
import { validation_messages } from "../../helpers/validations";


export abstract class BaseComponent {
  validation_messages = validation_messages
  primengTableHelper: PrimengTableHelper;
  constructor(injector: Injector) {
    this.primengTableHelper = new PrimengTableHelper();
  }


}
