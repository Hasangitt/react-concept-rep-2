import { useContext } from "react";
import Cousin from "../Cousins/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = ({name}) => {

    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'mim'}></Cousin>
                <Cousin name={'dim'}></Cousin>
            </section>
            <p>Money: {money} </p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk </button>
        </div>
    );
};

export default Aunty;