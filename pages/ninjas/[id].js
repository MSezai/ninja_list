export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');                                          // we can use await because this is an async func                  
    const data = await res.json();                                                                                  // also an async func, turns it into json     
    // data object will be an array of object where eeach object is a user/ninja   
    // it will look like this: [{params: {id:}}, {}, {}]
   
    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    
   
    return {
        paths: paths,
        fallback: false                                                                                     //for 404 for an undefined id
    }   
}

export const getStaticProps = async (context) => {   
    const id = context.params.id;       
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);                                          // we can use await because this is an async func                  
    const data = await res.json();     
                                                                                                                         // also an async func, turns it into json    
    
    return {
        props: {ninja: data}
    }                                                                                 
}



const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;