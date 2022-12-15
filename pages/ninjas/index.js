import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'



// this runs at buildtime as our app is built and components are rendered
// at this point we can add a fetch request inside it to fetch any data we need for our component template
// this function never runs in the browser so dont write code here that you expect to run in the browser
export const getStaticProps = async () => {          
    const res = await fetch('https://jsonplaceholder.typicode.com/users');                                          // we can use await because this is an async func                  
    const data = await res.json();                                                                                  // also an async func, turns it into json        
    return {
        props: {ninjas: data}
    }                                                                                 
}


// the code above runs before the comppnent is rendered, fetches the data and waits for that data

const Ninjas = ({ninjas}) => {                                                     // from props we can destructure the ninjas property, {ninjas} would desctruct ninja property from data
    return ( 
        <div>
            <h1>Test Ninjas</h1>
            {ninjas.map(ninja => (
            <Link href={'/ninjas/' + ninja.id} key={ninja.id} className={styles.single}>                
                    <h3>{ninja.name}</h3>               
            </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;