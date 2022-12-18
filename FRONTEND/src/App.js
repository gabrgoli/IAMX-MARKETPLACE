/////////// PROVIDERS ///////////////
import { Route, Routes,Navigate , Outlet } from 'react-router-dom';
/////////// PROVIDERS FIN ///////////////

//////////////////////////////// RUTAS ///////////////////////////////////////

////pages////
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import TermsConditions from './Pages/TermsConditions/TermsConditions';
import OfferDetails from './Pages/OfferDetails/OffferDetails';
import StartForm from './Pages/StartForm/StartForm';
import Login from './Pages/Login';
import ManageIdentity from './Pages/ManageIdentity';
import PaymentRequest from './Pages/PaymentRequest';
import CPay from './Pages/CPay';
import Dashboard from "./Pages/Dashboard/Dashboard";
/// user ////
import Profile from './Pages/Profile'

//////////////////////////////////////////////////////////////////////////

function App() {

  // const AppLayout = () => (
  //   <>
  //     <NavBarMobile />
  //     <Outlet />
  //   </>
  // );

  // const AppLayout2 = () => (
  //   <>
  //     <NavBar />
  //     <Outlet />
  //   </>
  // );

  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/startform" element={<StartForm />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        {/* <Route element={<AppLayout />}>
          <Route element={<AppLayout2 />}> */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/offer/:id' element={<OfferDetails/>}/>
            <Route path="/ManageIdentity" element={<ManageIdentity />} />
            <Route path="/paymentrequest" element={<PaymentRequest />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cpay" element={<CPay />} />
            <Route path="/dashboard" element={<Dashboard />} />
          {/* </Route>
        </Route> */}
        {/* <Route path='/passwordchange' element={<PasswordChange/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
