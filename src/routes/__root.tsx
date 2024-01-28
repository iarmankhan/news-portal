import {Outlet, rootRouteWithContext} from '@tanstack/react-router'

import { type AuthContext } from '../auth'
import {useAuth} from "@/hooks/useAuth.tsx";

interface MyRouterContext {
  auth: AuthContext
}

export const Route = rootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  const auth = useAuth()

  return (
    <div>Hello World {
      auth.isAuthenticated
        ? `authenticated as ${auth.user?.name}`
        : 'not authenticated'
    }
      <Outlet />
    </div>
  )
}
