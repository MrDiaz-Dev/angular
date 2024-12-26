export interface DatosTicRespuesta {
  "hydra:member":     DatosTic[];
  "hydra:totalItems": number;
}

export interface DatosTic {
  "@id":           string;
  "@type":         string;
  id:              number;
  idPersona:       string;
  idInterviniente?: string;
  emailCnb?:        string;
  aliases?:         string;
  notificado?:      string;
  fechaNot?:        Date | string;
  borrado?:         string;
  fechaBorrado?:    Date | string;
  vpn:             string;
  observaciones?:   string;
  mailWeb?:         string;
}