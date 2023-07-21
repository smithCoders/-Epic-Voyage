import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage/Homepage";
import Pricing from "../pages/pricing/Pricing";
import Product from "../pages/product/Product";
import Login from "../pages/Login/Login";
import AppLayout from "../pages/AppLayOut/AppLayout";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import CityList from "./components/CityList/CityList";

import CoutryList from "./components/CountryList/CoutryList";
import Form from "./components/Form/Form";
import City from "./components/City/City";
import { CitiestProvider } from "./Contexts/CityContext";

const App = () => {
  return (
    <CitiestProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="app" element={<AppLayout />}>
              {/* make cities URL defualt even if the parent route app is rendered, replace =element allo us to go bac to prev URL by clicking the browser back arrow */}
              <Route index element={<Navigate to={"cities"} replace />} />
              <Route path="cities" element={<CityList />} />
              {/* PARAMS */}
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CoutryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CitiestProvider>
  );
};

export default App;
