import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignUpImmigrant from "./pages/SignUpImmigrants/SignUpImmigrants";
import SignUpHelper from "./pages/SignUpHelper";
import Login from "./pages/Login/Login";
import Immigrant from "./pages/Immigrant";
import Helper from "./pages/Helper";
import SignUpEmployer from "./pages/SignUpEmployer";
import HelperDetail from "./pages/HelperDetail";
import EmployerDetail from "./pages/EmployerDetail";
import Chinese from "./pages/Chinese";
import Employer from "./pages/Employer";
import ChineseHelper from "./pages/ChineseHelper";
import ChineseEmployer from "./pages/ChineseEmployer";
import ChineseEmployerDetail from "./pages/ChineseEmployerDetail";
import ChineseHelperDetail from "./pages/ChineseHelperDetail";
import ChineseLogin from "./pages/ChineseLogin";
import ChineseSignUp from "./pages/ChineseSignUp";
import ChineseImmigrant from "./pages/ChineseImmigrant";
import ChineseSignUpEmployer from "./pages/ChineseSignUpEmployer";
import ChineseSignUpHelper from "./pages/ChineseSignUpEmployer";
import ChineseSignUpImmigrant from "./pages/ChineseSignUpImmigrant";
function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/immigrant" element={<SignUpImmigrant />} />
        <Route path="/signup/helper" element={<SignUpHelper />} />
        <Route path="/signup/employer" element={<SignUpEmployer />} />
        <Route path="/immigrant" element={<Immigrant />} />
        <Route path="/helper" element={<Helper />} />
        <Route path="/login" element={<Login />} />
        <Route path="/helperdetail" element={<HelperDetail />} />
        <Route path="/employerdetail" element={<EmployerDetail />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/signup/chinese" element={<ChineseSignUp />} />
        <Route path="/signup/immigrant/chinese" element={<ChineseSignUpImmigrant />} />
        <Route path="/signup/helper/chinese" element={<ChineseSignUpHelper />} />
        <Route path="/signup/employer/chinese" element={<ChineseSignUpEmployer/>} />
        <Route path="/loginchinese" element={<ChineseLogin />} />
        <Route path="/helperchinese" element={<ChineseHelper />} />
        <Route path="/employerchinese" element={<ChineseEmployer />} />
        <Route path="/immigrantchinese" element={<ChineseImmigrant />} />
        <Route path="/helperdetailchinese" element={<ChineseHelperDetail />} />
        <Route path="/employerdetailchinese" element={<ChineseEmployerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
