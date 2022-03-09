export default [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/views/Layout"),
    redirect: "/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/index/Index"),
      },
      {
        path: "/account/all",
        component: () => import("@/views/peo/all"),
        meta: { bread: ["账户管理人员", "所有人员"] },
      },
      {
        path: "/product/all",
        component: () => import("@/views/product/All"),
        meta: { bread: ["产品管理", "全部产品"], keepAlive: true },
      },
      {
        path: "/product/detail",
        component: () => import("@/views/product/Detail"),
        meta: { bread: ["产品管理", "产品详情"] },
      },
      {
        path: "/orders/all",
        component: () => import("@/views/orders/All"),
        meta: { bread: ["订单管理", "所有订单"] },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404"),
  },
];
