import FeaturesImage from "../resources/img/seo/features.png";

export default [
  {
    path: "/home",
    exact: true,
    component: () => import("../components/base"),
    seo: {
      title: "Home | ReactPWA Demo",
      description:
        "Feature set offered by ReactPWA with pluggable @pawjs plugins. ReactPWA is highly customizable and once can achieve anything as it is extendable",
      image: FeaturesImage
    }
  }
];
