import {data} from './../data/data.js';


export default function Card(){
    return(    
        <>
            {data.map((product) => (
                <article className='card'>
                
                <section key={product.id} className="card-container-img">
                    {product.newCollection && product.stock > 45 && 
                    <span className='new'><img className = "star" src= {`/images/${product.imgs.imgStar}`} alt="estrella" /></span>}
                    {product.stock > 45 ? <img className = "img-product" src= {`/images/${product.imgs.imgProduct}`} alt="product" />
                     
                    :<img className = "img-product" src= {`/images/${product.imgs.imgSoldOut}`} alt="product" />} 
                </section>
                    <section>
                        <h2>{product.name}</h2> 
                        <h2>{product.description}</h2>
                        <h2>{product.price}€ {product.price <200 && <span style={{color:"red", marginLeft: "10px"}}>30% off</span>}</h2> 
                </section> 
                    
               
               </article> 
                
            ))}
            </>
        
        
    );
    
    
}