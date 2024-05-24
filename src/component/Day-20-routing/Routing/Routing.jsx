import Home from './Parts/Home.jsx';
// import NotFound from '../../../pages/NotFound.jsx';

// Day 1
import DayOne from '../../Day-1/componentCycle.jsx'

// Day 2
// import DayTwo from '../../../pages/DayTwo.jsx';
import TaskOne from '../../Day-2-Props/task1.jsx'
import TaskTwo from '../../Day-2-Props/task2.jsx'

// Day 3
// import DayThree from '../../../pages/DayThree.jsx';
import TaskOneD3 from '../../Day-3-State/CallbackFunc/ChildToParent.jsx';
import TaskTwoD3 from '../../Day-3-State/ChildrenData/Demo.jsx';
import TaskThreeD3 from '../../Day-3-State/usestate/AddCount/AddCount.jsx'

// Day 4
// import DayFour from '../../../pages/DayFour.jsx';
import TaskOneD4 from '../../Day-4/Task-1 DefaultImg/DefaultImg.jsx';
import TaskTwoD4 from '../../Day-4/Task-2-consoleMethods/ConsoleMethods.jsx';
import TaskThreeD4 from '../../Day-4/Task-3-Counter/Counter.jsx';
import TaskFourD4 from '../../Day-4/Task-4-NestingChild/NestingChild.jsx';
import TaskFiveD4 from '../../Day-4/Task-5-MergeArray/MergeArray.jsx';
import TaskSixD4 from '../../Day-4/Task-6-AddArrayEle/AddArray.jsx';

// Day 5
// import DayFive from '../../../pages/DayFive.jsx';
import TaskOneD5 from '../../Day-5/Task-1/CounterUseEff.jsx';

// Day 6
// import DaySix from '../../../pages/DaySix.jsx';
import TaskOneD6 from '../../Day-6/Task-1-SetTimeOut/setTimeOut.jsx';
import TaskTwoD6 from '../../Day-6/Task-2-SetInterval/SetInterval.jsx';
import TaskThreeD6 from '../../Day-6/Task-3-localStorage/LocalStorage.jsx';
import TaskFourD6 from '../../Day-6/Task-4-APIFetch/APIFetch.jsx'

// Day 7-8
// import DaySE from '../../../pages/DaySE.jsx';
import TaskOneDSE from '../../Day-7-8-Events/Task-1-Events/impEvents.jsx';

// Day 9
// import DayNine from '../../../pages/DayNine.jsx';
import TaskOneD9 from '../../Day-9-ListsKeys/task-1-loops/Loops.jsx';
import TaskTwoD9 from '../../Day-9-ListsKeys/task-2-optionalChaining/optionalChaining.jsx';

// Day 10
// import DayTen from '../../../pages/DayTen.jsx';
import TaskOneD10 from '../../Day-10-Card/Task-1/removeDuplicate.jsx';
import TaskTwoD10 from '../../Day-10-Card/Task-2/nestedObj.jsx';
import TaskThreeD10 from '../../Day-10-Card/TaskThree/FilterCard.jsx';

// Day 11
// import DayEleven from '../../../pages/DayEleven.jsx';
import TaskOneD11 from '../../Day-11-Todo/todo.jsx';

// Day 12-13-14
import TaskOneD12 from '../../Day-12-13-14-Form/Task1/Forms.jsx'

// Day 15-16
import TaskOneD15 from '../../Day-15-16-Hooks/Hooks/UseCallBack/UseCallBack.jsx';
import TaskTwoD15 from '../../Day-15-16-Hooks/Hooks/Hooks.jsx';
import TaskThreeD15 from '../../Day-15-16-Hooks/Hooks/UseRefHook.jsx';
import TaskFourD15 from '../../Day-15-16-Hooks/Hooks/UseContext/Home.jsx';
import TaskFiveD15 from '../../Day-15-16-Hooks/CameraOnOff.jsx';

// Day-19
import TaskOneD19 from '../../Day-19-API/APIDemo.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom'


function Routing(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>

            <Route path='Day-1'>
              <Route path='class-component' element={<DayOne/>} />
            </Route>
            
            <Route path='Day-2'>
                <Route path='props-proptypes' element={<TaskOne/>} />
                <Route path='counter-props' element={<TaskTwo/>} />
            </Route>

            <Route path='Day-3'>
                <Route path='callback' element={<TaskOneD3/>} />
                <Route path='children' element={<TaskTwoD3/>} />
                <Route path='count-addition' element={<TaskThreeD3/>} />
            </Route>
            
            <Route path='Day-4'>
                <Route path='image-default' element={<TaskOneD4/>} />
                <Route path='console-methods' element={<TaskTwoD4/>} />
                <Route path='counter' element={<TaskThreeD4/>} />
                <Route path='prop-drilling' element={<TaskFourD4/>} />
                <Route path='merge-array' element={<TaskFiveD4/>} />
                <Route path='add-array' element={<TaskSixD4/>} />
            </Route>

            <Route path='Day-5'>
                <Route path='counter-useeffect' element={<TaskOneD5/>} />   
            </Route>

            <Route path='Day-6'>
                <Route path='settimeout' element={<TaskOneD6/>} />
                <Route path='setinterval' element={<TaskTwoD6/>} />
                <Route path='localstorage' element={<TaskThreeD6/>} />
            </Route>
           
            <Route path='Day-7'>
            <Route path='events' element={<TaskOneDSE/>} />
            </Route>
            
            <Route path='Day-9'>
            <Route path='optional-chaining' element={<TaskTwoD9/>} />
            </Route>

            <Route path='Day-10'>
                <Route path='remove-duplicate' element={<TaskOneD10/>} />
                <Route path='nested-object' element={<TaskTwoD10/>} />
                <Route path='filter-card' element={<TaskThreeD10/>} />
            </Route>
            
            <Route path='Day-11'>
                <Route path='todo' element={<TaskOneD11/>} />
            </Route>
            
            <Route path='Day-12'>
                <Route path='form-filter' element={<TaskOneD12/>} />    
            </Route>
            
            <Route path='Day-15'>
                <Route path='usecallback' element={<TaskOneD15/>}/>
                <Route path='usememo' element={<TaskTwoD15/>}/>
                <Route path='useref' element={<TaskThreeD15/>}/>
                <Route path='usecontext' element={<TaskFourD15/>}/>
                <Route path='camera' element={<TaskFiveD15/>}/>
            </Route>

            <Route path='Day-19'>
                <Route path='api-axios' element={<TaskOneD19/>}/>
            </Route>

            </Route>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
        
    </BrowserRouter>
    )
}

export default Routing;