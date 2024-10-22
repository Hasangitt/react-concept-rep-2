import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h3>Brother</h3>
            <p>Money: {money}</p>
        </div>
    );
};

export default Brother;