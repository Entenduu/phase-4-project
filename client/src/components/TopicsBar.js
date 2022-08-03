import {React, useEffect, useState} from "react";

function TopicsBar(){
    const [q, setQ] = useState('')
    const [topics, setTopics] = useState([])

    useEffect(() => {
       
        fetch("/topics").then((r) => {
            if (r.ok) {
            r.json().then(setTopics);
            }
        });
    }, []);

    return( 
            <div className="wrapper">
                    <div className="search-wrapper">
                        <label htmlFor="search-form">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                            />
                        </label>
                        <div className="vertical-menu">
                            <a href="#" className="active">Topics</a>
                            {topics.map(x => <a href='#'>{x.genre}</a> )}
                        </div>
                    </div>
            </div>
    )
}
export default TopicsBar;