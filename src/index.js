import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Faves from './Faves';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='faves' element={<Faves />} />
    </Routes>
  </BrowserRouter>
);

// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<App />}>
//     <Route index element={<Home />} />
//     <Route path="teams" element={<Teams />}>
//       <Route path=":teamId" element={<Team />} />
//       <Route path="new" element={<NewTeamForm />} />
//       <Route index element={<LeagueStandings />} />
//     </Route>
//   </Route>
// </Routes>
// </BrowserRouter>

// {
//   /* <NavBar />
//         <Routes>
//           <Route exact path='/' component={App} />
//           <Route path='/faves' component={Faves} />
//         </Routes> */
// }
