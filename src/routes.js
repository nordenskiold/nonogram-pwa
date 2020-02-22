import GuestRoutes from "./pages/guest";
import SplashScreen from "./pages/splash";

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [...GuestRoutes, ...SplashScreen];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
