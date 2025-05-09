/*Cree y renderice un componente que ejecute una función que
resuelva el siguiente enunciado: Para tributar un determinado
impuesto se debe ser mayor de 16 años y tener unos ingresos
iguales o superiores a 1000 € mensuales. Escribir un programa que
pregunte al usuario su edad y sus ingresos mensuales y muestre por
pantalla si el usuario tiene que tributar o no. Nota: Los valores
necesarios para que la función ejecute deben ser proporcionados
por el componente padre
*/

export default function MensajeCondicional(props){

    if(props.edad>= 16 && props.ingresos>=1600 )
        return <p>{props.mensajeuno}</p>
    else
        return <p>{props.mensajedos}</p>
}