
function Home({ user }) {

    if (user) {
        return (
            <div>
                {user.username}
            </div>
        )
    } else {
        return (
            
            <div class='background-div'>
                <h1>Please Login or Sign Up</h1>;
            </div>
            
        )
    }
}

export default Home;
