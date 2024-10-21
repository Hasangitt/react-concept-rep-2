import { useState } from "react";

const StateFullForm = () => {

    // const [name, setName] = useState(null);
    const [name, setName] = useState('Type Your Name');
    // const [email, setEmail] = useState(null);
    const [email, setEmail] = useState('type_your_mail@gmail.com');
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(password);
        if(password.length < 6){
            setError('password must be 6 characters or longer')
        }
        else{
            setError('');
            setPassword(e.target.value);
        }
    };



    const handleChangeName = e =>{
        setName(e.target.value);
    }

    const handleChangeEmail = e =>{
        setEmail(e.target.value);
    }

    const handleChangePassword = e =>{
        setPassword(e.target.value);
    }



    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                onChange={handleChangeName} value={name} type="text" name="name"/>
                <br />
                <input
                onChange={handleChangeEmail} value={email} type="email" name="email"/>
                <br />
                <input 
                onChange={handleChangePassword} type="password" name="password"/>
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;