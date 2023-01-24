import { Login } from "../pages";
import { AuthRoutes } from "./AuthRoutes";
export function HandlerRoutes() {
  const username = null;

  if (!username) return <Login />;

  return <AuthRoutes />;
}
