export interface Campo {
  field: string; // es el nombre del campo en la base de datos
  subField?: string | null; // en caso de que lo que debemos mostrar sea un valor de un objeto anidado
  header: string | null; // es el nombre que se mostrará en la tabla
  type?:  // ayuda a formatear el campo en la tabla
    'string' | // texto plano
    'long' | // texto plano largo
    'integer' | // número entero
    'float' | // número decimal
    'percentage' | // numero con símbolo de porcentaje (puede ser un número decimal)
    'date' | // fecha
    'time' | // hora
    'money' | // número con símbolo de moneda
    'img' | // string de imagen direccion de imagen
    null;
  pk?: boolean; // indica si es clave primaria
  visible?: boolean; // indica si es visible en la tabla
  order?: boolean; // indica si es ordenable
  creatable?: boolean; // indica si es un campo que se puede inicializar un formulario
  updatable?: boolean; // indica si es un campo editable en un formulario
  sorteable?: boolean; // indica si es un campo por el que se puede ordenar
  required?: boolean; // indica si es un campo requerido en un formulario1
  defaultValue?: any; // valor por defecto en un formulario
  hasDropdown?: boolean; // indica si es un campo que tiene un dropdown
  dropdown?: PDropdown[]; // los valores del desplegable
  emptyDropdown?: boolean; // indica si el dropdown debe estar vacío
  dropdownServiceMethod?: string; // el nombre del método del dropdown service que se debe llamar
  dropdownServiceValue?: string; // el nombre del valor que se debe obtener del dropdown service
  dropdownLabel?: string; // es el campo dentro de las opciones del dropdown que se mostrará
  dropdownValue?: string; // es el campo dentro de las opciones del dropdown que se guardará
  dropdownOnChangeMethod?: any; // es el método que se debe llamar cuando se selecciona un valor del dropdown
  fieldValueToLoadDropdown?: string; // es el campo con el que se debe cargar el dropdown 
  subFieldValueToLoadDropdown?: string; // es el subcampo con el que se debe cargar el dropdown si existe
  sameRooToValueForDropdown?: boolean; // para indicar cuando el valor del dropdown es el mismo campo
  img?: string; // valor de la imagen si la tiene
}

export interface PDropdown {
  label: string;
  value: any;
  correo?: string | null;
  id?: string | number;
  iri?: string | number;
  opcion1?: string | number;
  referencia?: string;
  description?: string;
}