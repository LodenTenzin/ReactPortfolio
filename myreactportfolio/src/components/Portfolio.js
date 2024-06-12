import AppCard from "./AppCard";

const Portfolio = () => {
    return(
        <div className="portfolio">
        <div className="divcontainer">
            <h1>Work Experience</h1>
            <div className="cardcontainer">
                <AppCard image={"verisk-logo1.png"} company={"Verisk Analytics, Inc"} location={"Jersey City, NJ"} description={"Design and Development"}/>
                <AppCard image={"ConnectionsLabLogo.png"} company={"NJIT Connections Lab"} location={"Newark, NJ"} description={"UI Design and Research"}/>
                <AppCard image={"sotlogo.png"} company={"Seeds of Tibet"} location={"East Rutherford, NJ"} description={"UI Design and Research"}/>
            </div>
        </div>
        <div className="divcontainer">
            <h1>UX/UI Projects</h1>
            <div className="cardcontainer">
                <AppCard image={"verisk-logo1.png"} company={"Verisk Analytics, Inc"} location={"Jersey City, NJ"} description={"Design and Development"}/>
                <AppCard image={"ConnectionsLabLogo.png"} company={"NJIT Connections Lab"} location={"Newark, NJ"} description={"UI Design and Research"}/>
                <AppCard image={"sotlogo.png"} company={"Seeds of Tibet"} location={"East Rutherford, NJ"} description={"UI Design and Research"}/>
            </div>
        </div>
        <div className="divcontainer">
            <h1>Tech Projects</h1>
            <div className="cardcontainer">
                <AppCard image={"verisk-logo1.png"} company={"Verisk Analytics, Inc"} location={"Jersey City, NJ"} description={"Design and Development"}/>
                <AppCard image={"ConnectionsLabLogo.png"} company={"NJIT Connections Lab"} location={"Newark, NJ"} description={"UI Design and Research"}/>
                <AppCard image={"sotlogo.png"} company={"Seeds of Tibet"} location={"East Rutherford, NJ"} description={"UI Design and Research"}/>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;