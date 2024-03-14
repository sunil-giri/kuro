import React, { Suspense, lazy } from 'react'
import {RouterProvider, createHashRouter} from 'react-router-dom'
import Home from './Home/Home';
// import Menu from './Menu/Menu';
// import CF from './CF/CF'
const Menu=lazy(()=>import("./Menu/Menu"))
const CF=lazy(()=>import("./CF/CF"))

function Routes() {
    const router = createHashRouter([
        {
          path: "/",
          element: <Home />, 
        },
        {
            path: "/menu",
            element:(<Suspense fallback={<div>Loading,........</div>}>
              <Menu />
            </Suspense> ), 
          },
          {
            path: "/cf",
            element: (
              <Suspense fallback={<div>Loading,........</div>}>
            <CF />
            </Suspense>), 
          },
      ]);
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default Routes