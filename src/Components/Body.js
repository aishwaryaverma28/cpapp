import { Link } from "react-router-dom"

export default function Body(){
    return(
        <div>
            <Link to="/jobmainpage"><button>JobSearch</button></Link>
            <Link to={"/contestmainpage"}><button>Contest</button></Link>
             <Link to="/resumebuilder"><button>Resume</button></Link>
        </div>
    )
}