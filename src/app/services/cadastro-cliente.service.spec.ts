import { TestBed, inject } from '@angular/core/testing';

import { CadastroClienteService } from './cadastro-cliente.service';

describe('CadastroClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroClienteService]
    });
  });

  it('should be created', inject([CadastroClienteService], (service: CadastroClienteService) => {
    expect(service).toBeTruthy();
  }));
});
