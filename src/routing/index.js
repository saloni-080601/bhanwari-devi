import React from 'react'

import { Route } from 'react-router-dom'
import { PrivateRoute } from './Routes'
// import { userRoles } from '../services/auth'
import { PATHS } from '../constant'

import Login from '../pages/Login'
import CreateClass from '../pages/CreateClass'
// import Classes from '../pages/classes'

const Routing = () => {
  return (
    <>
      {/* Public routes */}
      <Route
        exact
        path={ PATHS.LOGIN }
        component={ Login }
      />

      {/* Private routes */}
      {/* <PrivateRoute
        exact
        path={ PATHS.CLASS }
        component={ Class }
      />*/}
      <PrivateRoute
        exact
        path={ PATHS.CLASS}
        component={ CreateClass }
      /> 
    </>
  )
}

export default Routing
