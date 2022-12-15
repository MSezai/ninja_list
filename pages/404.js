import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'     // gives a method to redirect the user

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {                                           
        //console.log('use effect ran')                           // this will be first run when the component first mounts
        // at this point I want to start a timer:

        setTimeout(() => {
            // router.go(-1)     // go back
            router.push('/');
        }, 3000)

    }, [])                                                      // a dependency array, when its empty >> only fire this function once when the component first mounts and not again if any state changes

    return ( 
        <div className="not-found">
            <h1>Oooooops </h1>
            <h2>Page cannot be fond</h2>
            <p>Go back to the <Link href="/" id="anchorr">home page</Link></p>
        </div>
     );
}
 
export default NotFound;
