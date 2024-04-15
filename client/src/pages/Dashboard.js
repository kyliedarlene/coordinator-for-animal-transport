import Header from "../components/Header";
import DashContent from "../components/DashContent";
import SideMenu from "../components/SideMenu";

function Dashboard({ content }) {    
    return (
        <>
            <Header/>
            <SideMenu activeItem={content}/>
            <DashContent content={content}/>
        </>
    )
}

export default Dashboard;