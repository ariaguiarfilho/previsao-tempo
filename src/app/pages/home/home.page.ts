import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import * as fromHomeActions from './state/home.actions'
import * as fromHomeSelectors from './state/home.selectors'


@Component({
  selector: 'jv-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  consultarControl: FormControl;

  text: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.consultarControl = new FormControl('', Validators.required);

    this.store.pipe(select(fromHomeSelectors.selectHomeText))
    .subscribe(text => this.text = text)
  }

  pesquisar(): void{
    const text = this.consultarControl.value;
    this.store.dispatch(fromHomeActions.alterarTexto({text}));
  }
}
