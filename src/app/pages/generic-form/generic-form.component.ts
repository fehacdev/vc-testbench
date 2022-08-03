import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CpfMask } from 'src/app/shared/masks/cpf.mask';
import { cpfValidator } from 'src/app/shared/validators/cpf.validator';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css'],
})
export class GenericFormComponent implements OnInit {
  genericForm = new FormGroup({ cpf: new FormControl('', [cpfValidator]) });
  constructor(public cpfMask: CpfMask) {}

  ngOnInit(): void {}
}
