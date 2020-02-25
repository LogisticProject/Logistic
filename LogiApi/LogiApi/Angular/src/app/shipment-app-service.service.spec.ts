import { TestBed } from '@angular/core/testing';

import { ShipmentAppServiceService } from './shipment-app-service.service';

describe('ShipmentAppServiceService', () => {
  let service: ShipmentAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
