export default function NumberOfPassanger({text}){
    return(
        <div>
            <span>Number of {text}</span>
            <button>+</button>
            <input value={1}></input>
            <button>-</button>
        </div>
    )
}