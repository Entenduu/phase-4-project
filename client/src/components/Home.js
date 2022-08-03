import TopicsBar from "./TopicsBar";

function Home({ user }) {

    if (user) {
        return (
            <div>
                
                <TopicsBar/>
            
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
