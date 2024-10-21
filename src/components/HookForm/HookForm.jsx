import useInputState from "../Hooks/inputStateForm";


const HookForm = () => {

    // const [name, handleChangeName] = useInputState('Hello');

    const emailState = useInputState('none.none@none.go')
    
    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(name)
        console.log(emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleChangeName} type="text" name="name"/> */}
                <br />
                <input {...emailState} type="email" name="email"/>
                <br />
                <input type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;