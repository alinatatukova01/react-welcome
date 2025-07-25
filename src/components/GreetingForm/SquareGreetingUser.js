import './style.css'

function SquareGreetingUser(props){
    return(
        <div className='sqr-div'>
            <p>Hello, {props.text}</p>
        </div>
    )
}

export default SquareGreetingUser;