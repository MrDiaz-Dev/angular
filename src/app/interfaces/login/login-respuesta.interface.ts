export interface LoginRespuesta {
  json: LoginRespJson;
}

export interface LoginRespJson {
  token: string;
  data: Usuario;
}

export interface Usuario {
  id: number;
  username: string;
  role: string;
  created: string;
  modified: string;
  email: null;
}


export interface UsuarioPaginados {
  data: Usuario[],
  totalItems: number;
}
