import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart.jsx";
import { AuthProvider } from "./context/auth.jsx";
import { SearchProvider } from "./context/search.jsx";
import { LoadingProvider } from "./context/loading.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <LoadingProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </LoadingProvider>
  </AuthProvider>
);
