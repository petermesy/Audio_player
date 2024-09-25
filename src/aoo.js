import React from "react";
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';

import Users from "./User/page/Users";
import NewPlaces from "./Places/page/NewPlaces";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./Shared/componenet/Navigation/MainNavigation";
// import UserPlaces from "./Places/page/UserPlaces";
import Home from "./Shared/componenet/UIElements/Home";
import Resume from "./Places/page/Resume";
import Projects from "./Places/page/Projects";
import Contact from "./Places/page/Contact"
const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
     
     
      <Route path="/" exact>    
        {/* <Users/>   */}
        <Home/> 
      </Route>

      <Route path="/:userId/places" exact>
        <Resume/>
      </Route>
      
      <Route path="/Places/new" exact>    
        {/* <NewPlaces/>   */}
        <Projects/>  
      </Route>
      <Route path="/Places/Contact" exact>    
        {/* <NewPlaces/>   */}
        <Contact/>  
      </Route>
      <Redirect to="/"/>


      </Switch>
      </main>
    </Router>
  );
};

export default App;















// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from 'react-router-dom';

// import Users from './user/pages/Users';
// import NewPlace from './places/pages/NewPlace';
// import MainNavigation from './shared/components/Navigation/MainNavigation';

// const App = () => {
//   return (
//     <Router>
//       <MainNavigation />
//       <main>
//         <Switch>
//           <Route path="/" exact>
//             <Users />
//           </Route>
//           <Route path="/places/new" exact>
//             <NewPlace />
//           </Route>
//           <Redirect to="/" />
//         </Switch>
//       </main>
//     </Router>
//   );
// };

// export default App;
