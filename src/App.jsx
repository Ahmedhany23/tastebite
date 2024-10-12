import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Searchpage from "./pages/SearchPage/Searchpage";

import { QueryClientProvider , QueryClient } from "react-query";
import ProductDetails from "./pages/productdetails/productdetails";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
function App() {
  const queryClient = new QueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Searchpage setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>} />
            <Route path="/favorites" element={<FavoritesPage/>} />
            <Route path="/productDetails/:name" element={<ProductDetails searchQuery={searchQuery} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
