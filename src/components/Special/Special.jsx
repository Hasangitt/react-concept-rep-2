import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {

    const gift = useContext(AssetContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Has: {asset}</p>
            <p>Has also: {gift}</p>
        </div>
    );
};

export default Special;