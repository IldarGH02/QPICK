const Input = (props) => {
    return (
        <input className={props.className} onChange={props.onChange} value={props.value} placeholder={props.placeholder} type={props.type}/>
    )
}

export default Input