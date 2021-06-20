import { ErrorHandler } from "@angular/core";

export default class NoInternetError implements ErrorHandler {
  constructor(error) {
    console.log(error)
  }
  handleError(error: any): void {
    throw new Error(error);
  }

}
