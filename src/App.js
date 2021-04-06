import AppRoutes from './AppRoutes';
import React, { useEffect, useContext } from "react";
import axios from 'axios';

import AppContext from "./components/contexts/AppContext";

function App() {
  const { setAllProducts} = useContext(AppContext);
  const PRODUCT_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(PRODUCT_URL)
    .then(res => {
        setAllProducts(res.data);
    })
    .catch(err => console.log(err));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
        {AppRoutes}
    </div>
  );
}

export default App;
