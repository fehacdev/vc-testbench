import { FormControl } from '@angular/forms';
import { isValidCPF } from '@brazilian-utils/brazilian-utils';
import { CpfMask } from '../masks/cpf.mask';

export function cpfValidator(control: FormControl) {
  let cpf = control.value;
  let isValid = isValidCPF(cpf);
  if (!isValid) {
    return {
      error: 'CPF Inválido',
    };
  }
  return null;
}
