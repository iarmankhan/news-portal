import {Outlet, rootRouteWithContext} from '@tanstack/react-router'

import {type AuthContext} from '../auth'

interface MyRouterContext {
  auth: AuthContext
}

export const Route = rootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
    </>
  )
}
