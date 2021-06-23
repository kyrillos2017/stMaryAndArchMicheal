import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @ViewChild('input', {static: true}) input: ElementRef;
  @Input() type = 'text';
  @Input() label = 'string';
  @Input() icon : string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators = (control && control.validator) ? [control.validator] : [];
    const asyncValidators = (control && control.asyncValidator) ? [control.asyncValidator] : [];

    if(control){
      control.setValidators(validators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
      console.log(control)
    }
  }

  onChange(event? : Event) {
    console.log(event)
    console.log(this.controlDir.control?.errors)
  }

  onTouched() {
    console.log('t')
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


}
