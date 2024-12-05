import { useParams } from "react-router-dom";

function product(){
    const {id} = useParams();
    return(
        <div>
            <h1>Detalle del producto: {id}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta veritatis error odio repudiandae mollitia quo unde modi, eum saepe quis esse dolores quod quidem iure necessitatibus et. Eligendi, maxime.
            </p>
        </div>
    );
};

export default product;