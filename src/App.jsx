import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import AdminDashboard from "./pages/AdminDashboard";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
  });

  return (
    // <AuthProvider>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Admin" element={<AdminDashboard />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<Books />} />
            <Route path="*" element={<Books />} />
            <Route path="/books/:bookId" element={<BookDetails />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
