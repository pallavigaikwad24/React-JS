import React, { useState } from 'react'
import './sideBar.css';
import { NavLink, Outlet } from 'react-router-dom';

function SideBar() {

  return (
    <>
        <div id='sidebar'>
         <h3>Day One</h3>
         <p>--------------------------------</p>
          <ul>
            <li><NavLink to={'/Day-1/class-component'}>Class Component Life Cycle</NavLink></li>
          </ul>
          <br />
          <h3>Day Two</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-2/props-proptypes'}>Props and Prop Types</NavLink></li>
              <li><NavLink to={'/Day-2/counter-props'}>Counter using Props</NavLink></li>
            </ul>
            <br />
          <h3>Day Three</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-3/callback'}>Accessing Child data to Parent Callback funtion</NavLink></li>
              <li><NavLink to={'/Day-3/children'}>Accesing Children Data of component</NavLink></li>
              <li><NavLink to={'/Day-3/count-addition'}>Addition of Input Count using useState</NavLink></li>
            </ul>

            <br />
          
          <h3>Day Four</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-4/image-defaselectt'}>Task: Set defaselectt image when image id unavailable</NavLink></li>
              <li><NavLink to={'/Day-4/console-methods'}>Console Methods</NavLink></li>
              <li><NavLink to={'/Day-4/counter'}>Task: Counter</NavLink></li>
              <li><NavLink to={'/Day-4/prop-drilling'}>Task: Prop Drilling</NavLink></li>
              <li><NavLink to={'/Day-4/merge-array'}>Task: Merge Array</NavLink></li>
              <li><NavLink to={'/Day-4/add-array'}>Task: Add Elements into Array</NavLink></li>
            </ul>
          <h3>Day Five</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-5/counter-useeffect'}>Task: Counter using UseEffect Hook</NavLink></li>
            </ul>

          <br />

          <h3>Day Six</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-6/settimeout'}>Task: SetTimeOut using UseEffect</NavLink></li>
              <li><NavLink to={'/Day-6/setinterval'}>Task: SetInterval using UseEffect</NavLink></li>
              <li><NavLink to={'/Day-6/localstorage'}>Task: Localstorage using UseEffect</NavLink></li>
            </ul>

            <br />
          <h3>Day Seven and Eight</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-7/events'}>Task: Events</NavLink></li>
            </ul>

            <br />

          <h3>Day Nine</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-9/optional-chaining'}>Task: Optional chaining</NavLink></li>
            </ul>

          <br />
          <h3>Day Ten</h3>
          <p>--------------------------------</p>
            <ul>
              <li><NavLink to={'/Day-10/remove-duplicate'}>Task: Remove Duplicate</NavLink></li>
              <li><NavLink to={'/Day-10/nested-object'}>Task: Nested Object</NavLink></li>
              <li><NavLink to={'/Day-10/filter-card'}>Task: Filter Cards</NavLink> </li>
            </ul>
          <br />
          <h3>Day Eleven</h3>
          <p>--------------------------------</p>
          <ul>
            <li><NavLink to={'/Day-11/todo'}>Task: Advanced TODO List</NavLink></li>
          </ul>

          <br />
          <h3>Day Twelve Thirteen Fourteen</h3>
          <p>--------------------------------</p>
          <ul>
            <li><NavLink to={'/Day-12/form-filter'}>Task: Form Validation and Filter</NavLink></li>
          </ul>

          <br />
          <h3>Day Fifteen Sixteen</h3>
          <p>--------------------------------</p>
          <ul>
            <li><NavLink to={'/Day-15/usecallback'}>Task: UseCallBack Hook</NavLink></li>
            <li><NavLink to={'/Day-15/usememo'}>Task: UseMemo Hook</NavLink></li>
            <li><NavLink to={'/Day-15/useref'}>Task: UseRef Hook</NavLink></li>
            <li><NavLink to={'/Day-15/usecontext'}>Task: UseContext Hook</NavLink></li>
            <li><NavLink to={'/Day-15/camera'}>Task: Camera access using UseRef</NavLink></li>
          </ul>
          <br />
          <h3>Day Nineteen</h3>
          <p>--------------------------------</p>
          <ul>
            <li><NavLink to={'/Day-19/api-axios'}>Task: Fetch API using Axios and its methods</NavLink></li>
          </ul>
        </div>

        <Outlet/>
    </>
  )
}

export default SideBar;