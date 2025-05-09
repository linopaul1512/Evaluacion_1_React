/*Itere sobre ese arreglo usando el método map() de manera tal que
renderice cada elemento del mismo dentro de una lista no
ordenada. Muéstrela en el componente raíz de la aplicación. */
import { estudiantes } from './data/dataEstudiantes.js';
import { getImageUrl } from './utils/utilsImg.js';

export default function ListaEstudiantes() {
  const listItems = estudiantes.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.nombre}
      />
      <p>
        <b>{person.nombre}</b>
          {' '+ 'Es un estudiante de: ' + person.carrera + ',  '}
          cuya edad es:  {person.edad}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;


  /*
   { id:7, nombre: "Esteban", edad: 19, carrera: "Medicina", imageId: 'lrWQx8l' },
*/ 
}