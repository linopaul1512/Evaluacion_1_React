/*Cree y renderice un componente de función React usando marcado
JSX que reciba 2 props, una de tipo string y otra de tipo int  */

const MensajeProps = (props) => {

    return (
        <div>
            <h1>
                Mi nombre es, {props.nombre}, mi edad {props.edad}
            </h1>
        </div>
    )
}

export default MensajeProps