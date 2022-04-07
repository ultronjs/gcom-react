import { BrowserRouter } from "react-router-dom";
import {
  FilterProvider,
  CartProvider,
  WishListProvider,
  AuthProvider,
  ToastProvider,
} from "./context";
export const ProviderWrapper = ({ children }) => {
  return (<ToastProvider>
    <FilterProvider>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </FilterProvider>
  </ToastProvider>)
};
