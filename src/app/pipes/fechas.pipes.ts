import { Pipe, PipeTransform } from "@angular/core";
import * as Moment from "moment";
Moment.locale("es");
@Pipe({
  name: "fechaspipe"
})
export class FechasPipe implements PipeTransform {
  transform(fecha: Date) {
    return Moment(fecha).isValid() ? Moment(fecha).fromNow() : fecha;
  }
}
