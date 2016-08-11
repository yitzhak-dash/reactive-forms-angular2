import {Component, OnInit, ViewChild} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import {User} from "../user";
import {NestedFormComponent} from "../nested-form/nested-form.component";

@Component({
  moduleId: module.id,
  selector: 'app-model-driven-component',
  templateUrl: 'model-driven-component.component.html',
  styleUrls: ['model-driven-component.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, NestedFormComponent]

})
export class ModelDrivenComponentComponent implements OnInit {
  myGroup: FormGroup;

  @ViewChild(NestedFormComponent)
  nestedComponent: NestedFormComponent;

  user: User;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.user = {
      name: 'Moshe',
      address: {
        street: 'Backer str',
        postcode: '12345'
      }
    };

    this.myGroup = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', [<any>Validators.required]],
        postcode: ['123']
      }),
      time: this.nestedComponent.nestedGroup
    });
  }

  save(arg) {
    console.log("[*] saved");
  }

}
