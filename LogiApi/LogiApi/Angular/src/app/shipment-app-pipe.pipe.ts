import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shipmentAppPipe'
})
export class ShipmentAppPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
