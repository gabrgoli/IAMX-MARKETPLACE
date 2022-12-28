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
import Login from './Pages/Login/Login';
import ManageIdentity from './Pages/ManageIdentity';
import Dashboard from "./Pages/Dashboard/Dashboard";
import OrderNowBusiness from "./Pages/OrderNowPage/OrderNowBusiness";
import OrderNowPrivate from "./Pages/OrderNowPage/OrderNowPrivate";
import OrderNowSubscription from "./Pages/OrderNowPage/OrderNowSubscription";
import OrderNowPayAsYouGo from "./Pages/OrderNowPage/OrderNowPayAsYouGo";



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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/OrderNow-Business" element={<OrderNowBusiness />} />
            <Route path="/OrderNow-Private" element={<OrderNowPrivate />} />
            <Route path="/OrderNow-Subscription" element={<OrderNowSubscription />} />
            <Route path="/ordernow-pay-as-you-go" element={<OrderNowPayAsYouGo />} />
          {/* </Route>
        </Route> */}
        {/* <Route path='/passwordchange' element={<PasswordChange/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
