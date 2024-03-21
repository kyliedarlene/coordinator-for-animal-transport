import DashContent from "../components/DashContent";

function Dashboard( {content} ) {    
    return (
        <>
        <h1>Dashboard</h1>
        <DashContent content={content}/>
        </>
    )
}

export default Dashboard;