import { useCallback, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Login } from "../pages/Login/Login";
import { PrivateRoute } from "../components/Private/PrivateRoute";

export default function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLoginSuccess = useCallback(() => {
    setIsAuthenticated(true);
    localStorage.setItem("token", "mock-token")
  }, [])

  return (
    <Routes>
      <Route
        path="/login"
        element={<Login handleLoginSuccess={handleLoginSuccess} />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Home</>
          </PrivateRoute>
        }
      />
      <Route
        path="/stock"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Estoque</>
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Produtos</>
          </PrivateRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Vendas</>
          </PrivateRoute>
        }
      />
      <Route
        path="/manufacturing"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Fabricação</>
          </PrivateRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Clientes</>
          </PrivateRoute>
        }
      />
      <Route
        path="/configs"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <>Configurações</>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
