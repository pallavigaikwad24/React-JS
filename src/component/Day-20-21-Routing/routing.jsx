import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import LifeCycle from '../Day-1/componentCycle.jsx';
import Props from '../Day-2-Props/DayTwo.jsx';
import State from '../Day-3-State/DayThree.jsx';
import Tasks from '../Day-4/DayFour.jsx';
import CounterUseff from '../Day-5/Task-1/CounterUseEff.jsx';
import DaySix from '../Day-6/DaySix.jsx';
import EventsTasks from '../Day-7-8-Events/EventsTasks.jsx';
import InputTypes from '../Day-7-8-Events/Task-2-inputTypes/inputType.jsx';
import DayNine from '../Day-9-ListsKeys/DayNine.jsx';
import Card from '../Day-10-Card/TaskThree/FilterCard.jsx';
import TODO from '../Day-11-Todo/todo.jsx';
import Form from '../Day-12-13-14-Form/Task1/Forms.jsx';
import HooksTasks from '../Day-15-16-Hooks/Hooks/HooksTasks.jsx';
import Camera from '../Day-15-16-Hooks/CameraOnOff.jsx';
import APIAxios from '../Day-19-API/APIDemo.jsx';
import Formik from '../Day-24/Registration/Registration.jsx';
import MemoComp from '../Day-26-Redux/React.Memo/Parent.jsx';
import ReduxComp from '../Day-27-Redux Ways/FirstWayOfRedux/Counter.jsx';
import MaterialUI from '../Day-28-MaterialUI/Cards.jsx';
import HOC from '../Day-28-MaterialUI/HOC/MainComp.jsx';
import Lazy from '../Day-28-MaterialUI/MUI.jsx';
import Custom from '../Day-29/CustomeHooks/CheckState.jsx';

function Routing() {
  return (
    <>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route path="/week-one">
              <Route path="lifecycle" element={<LifeCycle />} />
              <Route path="props-task" element={<Props />} />
              <Route path="state-task" element={<State />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="useeffect" element={<CounterUseff />} />
            </Route>

            <Route path='/week-two'>
              <Route path='useeffect-task' element={<DaySix/>}/>
              <Route path='events' element={<EventsTasks/>}/>
              <Route path='input-types' element={<InputTypes/>}/>
              <Route path='list-keys' element={<DayNine/>}/>
              <Route path='cards' element={<Card/>}/>
            </Route>

            <Route path='/week-three'>
              <Route path='todo' element={<TODO/>}/>
              <Route path='form' element={<Form/>}/>
            </Route>

            <Route path='/week-four'>
              <Route path='hooks' element={<HooksTasks/>}/>
              <Route path='camera' element={<Camera/>}/>
              <Route path='axios' element={<APIAxios/>}/>
            </Route>

            <Route path='/week-five'>
              <Route path='formik-yup' element={<Formik/>}/>
            </Route>

            <Route path='/week-six'>
              <Route path='memo' element={<MemoComp/>}/>
              <Route path='redux' element={<ReduxComp/>}/>
              <Route path='materialui' element={<MaterialUI/>}/>
            </Route>

            <Route path='/week-seven'>
              <Route path='hoc' element={<HOC/>}/>
              <Route path='lazy' element={<Lazy/>}/>
              <Route path='custom-hook' element={<Custom/>}/>
            </Route>
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default Routing;