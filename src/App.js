import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './Routes/Root/Root';
import Home from './Routes/Home/Home';
import Details from './Routes/Details/Details';
import BusFacility from './Components/Details/BusFacility/BusFacility';
import BusImages from './Components/Details/BusImages/BusImages';
import Register from './Routes/Register/Register';
import TokenVerify from './Routes/TokenVerify/tokenVerify';
import SeatBook from './Routes/SeatBook/SeatBook';
import PassengerSeatBook from './Routes/SeatPassangerDetail/PassengerSeatBook';
import BusinessRegisterHome from './Routes/BusinessRegister/BusinessHome';
import QuestionOne from './Routes/BusinessRegister/Questions/Question1/QuestionOne';
import QuestionTwo from './Routes/BusinessRegister/Questions/Question2/QuestionTwo';
import QuestionThree from './Routes/BusinessRegister/Questions/Question3/QuestionThree';
import QuestionFour from './Routes/BusinessRegister/Questions/Question4/Questionfour';
import DashBoard from './Routes/DashBoard/DashBoard';
import BusinessActivity from './Components/DashBoard/BusinessOptions/BusinessActivity/BusinessActivity';

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root></Root>}>
      <Route index element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/register/business' element={<BusinessRegisterHome></BusinessRegisterHome>}>
        <Route index element={<QuestionOne></QuestionOne>}></Route>
        <Route path='questionTwo' element={<QuestionTwo></QuestionTwo>}></Route>
      
      </Route>
      <Route path='register/verify' element={<TokenVerify></TokenVerify>}></Route>
      <Route path='/bus/:id' element={<Details></Details>}>
        <Route index element={<BusFacility></BusFacility>}></Route>
        <Route path='images' element={<BusImages></BusImages>}></Route>
      </Route>
      <Route path='/dashboard' element={<DashBoard></DashBoard>}>
        <Route path='businessActivity' element={<BusinessActivity></BusinessActivity>}>
          
        </Route>
      </Route>
      <Route path='/seatBook/seatSelection/:id' element={<SeatBook></SeatBook>}></Route>
      <Route path='/seatBook/passengerDetails' element={<PassengerSeatBook></PassengerSeatBook>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
