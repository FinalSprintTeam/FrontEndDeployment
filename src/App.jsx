import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Main/Footer";
import NavBar from "./Components/Main/Nav";
import Member from "./Components/Member/Member";
import Tournament from "./Components/Tournament/Tournament";
import Main from "./Components/Main/Main";
import NotFound from "./Components/Main/notFound";
import { Fragment, useEffect, useState, useContext } from "react";
import Block from "./UI/Block";
import { Routes, Route } from "react-router-dom";
import { getData } from "./api/services/getData";
import TournamentContext from "./Components/Context/tournament-context";
import TournamentRoutes from "./Components/Tournament/TournamentRoutes";
import MemberContext from "./Components/Context/member-context";
import MemberRoutes from "./Components/Member/MemberRoutes";
import { ToastContainer } from "./utils/hooks/useToast";

function App() {
  const tourCtx = useContext(TournamentContext);
  const memCtx = useContext(MemberContext);

  useEffect(() => {
    memCtx.getMember();
    tourCtx.getTournament();
  }, []);

  return (
    <Fragment>
      <header>
        <NavBar />
      </header>

      <main className="App">
        <ToastContainer />
        <Block>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/members/*" element={<MemberRoutes />} />
            <Route path="/tournaments/*" element={<TournamentRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Block>
      </main>

      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
