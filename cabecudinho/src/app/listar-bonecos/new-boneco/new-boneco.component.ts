import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../login/auth/auth.service";
import {Http} from "@angular/http";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-new-boneco',
  templateUrl: './new-boneco.component.html',
  styleUrls: ['./new-boneco.component.scss'],
})
export class NewBonecoComponent implements OnInit {

  avatar: FormGroup

  navigateListar(){
    this.auth.createAvatar(this.avatar.value.name, this.avatar.value.model_ids);
  }


  constructor(private router: Router,
              public auth: AuthService,
              private http: Http,
              private formbuilder: FormBuilder) {
    this.avatar = this.formbuilder.group({
      name: [null],
      model_ids: [null]
    });
  }

  ngOnInit(
  ) {

  }

}
