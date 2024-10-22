import Cousin from "../Cousins/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Unlce</h2>
            <section className="flex">
                <Cousin name={'sakib'} asset={asset}></Cousin>
                <Cousin name={'minhaz'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;