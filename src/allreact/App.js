import React, { Suspense } from "react";
// import ReactDOM from "react-dom/client";
import Hello from "./components/Hello";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import "./App.css";
/* Example */
import Jsx from "./components/jsx/Jsx";
import Rendering from "./components/RenderingElements/Rendering";
import Form from "./components/form/Form";
import A from "./components/LiftingStateUp/A";
import Accessibility from "./components/accessibility/Accessibility";
import Project1 from "./components/project/Project1";
import Composition from "./components/CompositionVsInheritance/Composition";
import ReactLazy from "./components/CodeSplitting/Reactlazy";
// import Main from ("./components/Context/Main");
import Error from "./components/errorBoundaries/Error";
import ForwardingRefs from "./components/forwardingRefs/ForwardingRefs";
import Fragments from "./components/Fragments/Fragments";
import UseRefFunction from "./components/refsAndTheDOM/UseRef";
import StateHooks from "./components/stateHooks/StateHooks";
import EffectHook from "./components/effectHooks/EffectHook";
import UsingCustHook from "./components/customHook/UsingCustHook";
import MemoCallback from "./components/memoAndCallback/MemoCallback";
import Parent from "./components/useImperativeHandle/Parent";
import { Provider } from "react-redux";
import ReduxHooks from "./components/reduxHooks/ReduxHooks";
import store from "./components/reduxHooks/store";

const Main = React.lazy(() => import("./components/Context/Main"));
function App() {
  return (
    <Router>
      <Navebar />
      <div className="container-fluid h-100">
        <div className="row">
          <div className="col-2 h-100">
            <Sidebar />
          </div>
          <div className="col-10 mainBox" id="demo1">
            <Routes>
              {/* Navbar */}
              <Route exact path="/" element={<Hello />} />
              <Route exact path="/about" element={<About />} />
              {/* Sidebar */}
              <Route exact path="/" element={<Hello />} />

              {/* Examples */}

              <Route exact path="/project1" element={<Project1 />} />
              <Route exact path="/jsx" element={<Jsx />} />
              <Route exact path="/rendering-elements" element={<Rendering />} />
              <Route exact path="/form" element={<Form />} />
              <Route exact path="/Lifting-State-Up" element={<A />} />
              <Route
                exact
                path="/Composition-inheritance"
                element={<Composition />}
              />
              <Route exact path="/accessibility" element={<Accessibility />} />
              <Route exact path="/code-splitting" element={<ReactLazy />} />
              <Route
                exact
                path="/context/*"
                element={
                  <Suspense fallback={<h1>Loading...</h1>}>
                    <Main />
                  </Suspense>
                }
              />
              <Route exact path="/error-boundaries" element={<Error />} />
              <Route
                exact
                path="/forwarding-refs"
                element={<ForwardingRefs />}
              />
              <Route exact path="/fragment" element={<Fragments />} />
              <Route
                exact
                path="/refs-and-the-DOM"
                element={<UseRefFunction />}
              />
              <Route exact path="/state-hook" element={<StateHooks />} />
              <Route exact path="/effect-hook" element={<EffectHook />} />
              <Route exact path="/custom-hook" element={<UsingCustHook />} />
              <Route exact path="/memo-callback" element={<MemoCallback />} />
              <Route exact path="/useImperativeHandle" element={<Parent />} />
              <Route
                exact
                path="/redux"
                element={
                  <Provider store={store}>
                    <ReduxHooks />
                  </Provider>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
