import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import NotFound from "./pages/NotFound";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <SmoothScrollProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SmoothScrollProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
