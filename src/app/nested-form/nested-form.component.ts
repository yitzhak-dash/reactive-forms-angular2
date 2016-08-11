import {Component, OnInit} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'


@Component({
  moduleId: module.id,
  selector: 'app-nested-form',
  templateUrl: 'nested-form.component.html',
  styleUrls: ['nested-form.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class NestedFormComponent implements OnInit {
  nestedGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.nestedGroup = this._fb.group({
      time: ['', [<any>Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {

  }

}
