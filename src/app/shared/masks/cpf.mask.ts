import { Injectable } from '@angular/core';
import { Mask } from './mask';

@Injectable({
  providedIn: 'any',
})
export class CpfMask extends Mask {
  pattern = '000.000.000-00';
  message = 'CPF inválido';
}
