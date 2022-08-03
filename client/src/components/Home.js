import Adbar from "../AdBar";
import TopicsBar from "./TopicsBar";

function Home({ user }) {

    if (user) {
        return (
            <div>
                <TopicsBar/>
                <Adbar/>
            </div>
        )
    } else {
        return (
            
            <div className='background-div'>
                <h1>Please Login or Sign Up</h1>;
            </div>
            
        )
    }
}

export default Home;
