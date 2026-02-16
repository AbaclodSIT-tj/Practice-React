import {Things} from '../components/info'
const About=({items = [], Things})=>{
    return(
        <>
        <div>
       <h2>It worked nice</h2>
        <h1>Resident Evil Shoppee</h1>
        <ul>
            {items.map((thing)=>(
                <li key={thing.id}>
                    {thing.id}. {thing.name}- ${thing.price}
                </li>
            ))}
        </ul>            
        </div>
 
        </>
    );
}
export default About;