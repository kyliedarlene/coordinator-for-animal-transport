import Header from "../components/Header";
import DashContent from "../components/DashContent";
import SideMenu from "../components/SideMenu";

function Dashboard({ content }) {    
    return (
        <>
            <Header/>
            <h1>Dashboard</h1>
            <SideMenu activeItem={content}/>
            <DashContent content={content}/>
        </>
    )
}

export default Dashboard;