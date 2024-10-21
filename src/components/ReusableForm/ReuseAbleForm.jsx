

const ReuseAbleForm = ({children, handleSubmit, formTile, submitBtn = 'Submit'}) => {


    const handleAllSubmit = e => {
        e.preventDefault();
       const data = {
            name: e.target.name.value,
            email: e.target.email.value,
       }
       handleSubmit(data)
    }

    return (
        <div>
            {/* <h2>{formTile}</h2> */}
            {children}
             <form onSubmit={handleAllSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="text" name="phone"/>
                <br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReuseAbleForm;