import "./footer.css";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerItem">
                <div className="footerCard">
                    <p className='footerLogo' ><abbr title="Centro de Ciência e Tecnologia">CCT</abbr></p>
                </div>
                <div className="footerCard">
                    <h1 className="footerTitle">ONDE NOS ENCONTRAR</h1>
                    <p className="footerText">
                        R. Baraúnas, 351.
                        <br /> Universitário, Campina Grande - PB (58429-500)
                        <br /> (99) 99999-9999
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
