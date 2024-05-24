import { NavLink } from "react-router-dom";

function HomePage(){
    return(
        <>
            <ul>
                <li><NavLink to={"/DayOne"}>Day 1</NavLink></li>
                <li><NavLink to={"/DayTwo"}>Day 2</NavLink></li>
                <li><NavLink to={"/Daythree"}>Day 3</NavLink></li>
                <li><NavLink to={"/DayFour"}>Day 4</NavLink></li>
                <li><NavLink to={"/DayFive"}>Day 5</NavLink></li>
                <li><NavLink to={"/DaySix"}>Day 6</NavLink></li>
                <li><NavLink to={"/DaySE"}>Day 7 and 8</NavLink></li>   
                <li><NavLink to={"/DayNine"}>Day 9</NavLink></li>
                <li><NavLink to={"/DayTen"}>Day 10</NavLink></li>

            </ul>

        </>
    )
}

export default HomePage;