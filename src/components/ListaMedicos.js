import { estudiantes } from './data/dataEstudiantes.js';
import { getImageUrl } from './utils/utilsImg.js';

export default function ListaMedicos() {
    const chemists = estudiantes.filter(person =>
        person.carrera === 'Medicina'
    );
    const listItems = chemists.map(person =>
        <li>
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
}

/*Para obtener solo los que son estudiantes de medicina */