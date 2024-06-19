import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, ListPage, SignupPage, ChatPage } from "../pages";
import { NotFound404Page } from "../pages/not-found-404";

// export const IsLoggedContext = createContext();

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/">
            {isLogged ? (
              <Navigate to="/list" />
            ) : (
              <Route path="/" element={<LoginPage />} />
              )}
          </Route> */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />}>
          <Route path=":chatId" element={<ChatPage />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </Router>
  );
};
