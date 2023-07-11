import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PaymentSuccessful from "./PaymentSuccessful";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/paymentsuccess" element={<PaymentSuccessful />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
