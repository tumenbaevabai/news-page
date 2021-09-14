import Footer from "../Footer";
import Header from "../Header";
import "./style.css"


const Layout = ({children}) => {
    return (
        <>
        <Header />
        <main className="main" >
            <div className="container">
                {children}
            </div>
        </main>
        <Footer />
        </>
    )
}

export default Layout