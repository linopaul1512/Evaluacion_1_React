/*Cree y renderice un componente que reciba un props tipo string
llamada mensaje y que devuelva un párrafo que lo muestre sólo si
este tiene más de cinco caracteres.
*/


export default function ContarCaracteres(props){
    let longitud = props.mensaje.length
    if(longitud> 5)
        return <p>Hola, este es el párrafo que se devuelve porque el mensaje tiene más de 5 caracteres: JavaScript fue creado por Brendan Eich en 1995 mientras trabajaba en Netscape, inicialmente con el nombre de LiveScript. El objetivo era añadir interactividad a las páginas web. El nombre se cambió a JavaScript para aprovechar el éxito de Java. JavaScript se lanzó por primera vez con Netscape Navigator 2 en 1996. </p>
    else
        return <p>Error: cantidad de caracteres que se devuelve es insuficiente</p>
}



