//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre

let nombre = "Carlos";

//- Otra cadena de texto con tu Apellido

let apellido = "Reges";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre.concat(' ', apellido);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let cantidad = estudiante.length;

//- Una variable que contenga la primera letra del Nombre

let primera = estudiante.charAt(0);

//- Otra variable que contenga la última letra del Apellido

let ultima = apellido.charAt(-1);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudianteSinEspacio = estudiante.trim();

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let incluido = estudiante.includes(nombre);
