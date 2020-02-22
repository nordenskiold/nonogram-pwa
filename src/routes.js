import FeaturesImage from "./resources/img/seo/features.png";
import SplashImage from "./resources/img/seo/home-splash-screen.png";
export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      {
        path: "/",
        exact: true,
        component: () => import("./components/splash"),
        seo: {
          title:
            "ReactPWA: A developer friendly ReactJS boilerplate | ReactPWA Demo",
          description:
            "Create Upgradable, SEO friendly Progressive web applications with ReactPWA. Its fast and developer friendly and more importantly its UPGRADABLE!",
          image: SplashImage
        }
      },
      {
        path: "/play",
        exact: true,
        component: () => import("./components/game"),
        seo: {
          title: "Home | ReactPWA Demo",
          description:
            "Feature set offered by ReactPWA with pluggable @pawjs plugins. ReactPWA is highly customizable and once can achieve anything as it is extendable",
          image: FeaturesImage
        }
      }
    ];

    routeHandler.hooks.initRoutes.tapPromise("AppRoutes", async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
