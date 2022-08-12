import React, { useEffect, useState } from "react";
import "./App.scss";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { products } from "./API/API";

function App() {
  const [navbarItems, setNavbarItems] = useState<string[]>([]);
  const [allproducts, setAllProducts] = useState(products);
  const [currentProducts, setCurrentProducts] = useState(allproducts);
  const [currentPage, setCurrentPage] = useState("All");

  useEffect(() => {
    setNavbarItems([...(new Set(allproducts.map((product) => product.type)) as any), "All"]);
  }, []);

  useEffect(() => {
    if (currentPage === "All") {
      setCurrentProducts(allproducts);
      return;
    }

    setCurrentProducts(
      allproducts.filter((product) => product.type === currentPage)
    );
  }, [currentPage]);

  const handleChangePage = (currPage: string) => {
    setCurrentPage(currPage);
  };

  return (
    <>
      <Navbar navbarItems={navbarItems} selectedPage={currentPage} handleChangePage={handleChangePage} />
      <div className="card-outer-container">
        {currentProducts.map((product) => (
          <Products key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
