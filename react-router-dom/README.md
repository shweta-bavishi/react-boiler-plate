# Steps for adding react routing in react application

1. Follow steps mentioned in https://github.com/shweta-bavishi/react-boiler-plate/blob/main/create-react-app/README.md to create a basic react application

2. Install react-router-dom in application
    `npm install react-router-dom`
    
3. Wrap your main application into `<BrowserRouter />` component

4. Define `<Routers />` inside `<BrowserRouter />` which consits all your routes

5. Define all the `<Routes />` inside the `<Routers />` component

6. Add `path` and `element` inside `<Routes />` to define which element to render for the path mentioned

File App.js: 

```
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}
```

7. To add ErrorPage to component, add `path` value as `*` at the end of all `Routes`

```
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile/:username" element={<Profile />} />
  <Route path="*" element={<ErrorPage />} />
</Routes>
```

8. To add navbar in your app, add all the `<Link />` components into `<nav >` component, where `to` inside the link determines the path it should map to

```
<Router>
  <nav>
    <Link to="/"> Home </Link>
    <Link to="/about"> About </Link>
    <Link to="/profile"> Profile </Link>
  </nav>
  <Routes>
    ....
  </Routes>
</Router>
```

9. To navigate from one component to another on click of button, use `useNavigate` hook

```
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    return (<> This is a Profile Page <button onClick={() => navigate('/about')}>Go to About Page</button></>)
}

export default Profile
```

10. To send parameters in navigating from one page to another, use `useParams` hook

```
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    return (<> This is a Profile Page for {username} <button onClick={() => navigate('/about')}>Go to About Page</button></>)
}


export default Profile
```

File App.js

```
<Router>
  <Routes>
    ...
    <Route path="/profile/:username" element={<Profile />} />
  </Routes>
</Router>
```
    


