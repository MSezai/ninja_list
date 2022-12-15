import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ( {children}) => {      // children is anythin which is nested inside of Layout in _app.js!
    return ( 
        <div className="content">
            <Navbar />  
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;