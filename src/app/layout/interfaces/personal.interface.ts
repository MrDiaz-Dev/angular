import { DatosComunes } from "./datos-comunes.interface";
import { DatosPersonales } from "./datos-personales.interface";

export interface Personal {
  datosPersonales: DatosPersonales;
  datosComunes: DatosComunes;
  situacionLaboral: any;
}