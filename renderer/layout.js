
const Layout = ({ children }) =>{
    return (
        <>
            <nav>
                <h2> Nav Logo</h2>
            </nav>
            <main>{children}</main>
        </>
    );
};

export default Layout;