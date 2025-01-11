import { FaNetworkWired } from "react-icons/fa";


export function CardsTask({name_category}){
    return (<>
        <div className="card-container">
            <div className="card">
                <h3 className="card-title">{name_category}</h3>
                <p className="category-footer">Optimiza tu flujo de trabajo con nuestras herramientas inteligentes.</p>
                <div className="footer-card">
                    <FaNetworkWired size={30} style={{color:'black'}}/> &nbsp;
                    <p className="category-footer">toDo List <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span> </p>
                </div>
            </div>
        </div>
    
    </>);
}