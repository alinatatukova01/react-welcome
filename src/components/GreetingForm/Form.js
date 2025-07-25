function Form (props){


    return(
        <form onSubmit={props.callBackSubmitHandler}>
            <label>Type your name<input type="text" value={props.text} name="text" onChange={props.callBackOnChange}/></label>
            <button>Submit form</button>
        </form>
    )
}

export default Form;