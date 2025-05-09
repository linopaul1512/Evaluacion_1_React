/*7. Cree y renderice un componente que reciba un props tipo int, lo
evalue de tal modo que si su valor es mayor a 18 devuelva un
párrafo que con el texto: ¡Ya puedes votar! y en caso contrario
¡Sólo espera con paciencia! (Se recomienda usar el operador
ternario)
*/

export default function MensajeTernario(props){

     return props.edad>18 ? <p> Usted, {props.nombre}, {props.mensajeuno}</p> 
     : <p>{props.mensajedos}</p>
}
