import { Component } from '@angular/core';
import {ModelDrivenComponentComponent} from "./model-driven-component/model-driven-component.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ModelDrivenComponentComponent]
})
export class AppComponent {
  title = 'app works!';
}
