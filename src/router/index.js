import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import Sidebar from "../components/Sidebar.vue";
import Options from "../components/Options.vue";

Vue.use(VueRouter);

function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash };
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: "" };
}

// const scrollBehavior = function (to, from, savedPosition) {
//   if (savedPosition) {
//     // savedPosition is only available for popstate navigations.
//     return savedPosition;
//   } else {
//     const position = {};

//     // scroll to anchor by returning the selector
//     if (to.hash) {
//       position.selector = to.hash;

//       // specify offset of the element
//       if (to.hash === "#anchor2") {
//         console.log("inside to hash offset");
//         position.offset = { y: 600 };
//       }

//       // bypass #1number check
//       if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
//         return position;
//       }

//       // if the returned position is falsy or an empty object,
//       // will retain current scroll position.
//       return false;
//     }

//     return new Promise((resolve) => {
//       // check if any matched route config has meta that requires scrolling to top
//       if (to.matched.some((m) => m.meta.scrollToTop)) {
//         // coords will be used if no selector is provided,
//         // or if the selector didn't match any element.
//         position.x = 0;
//         position.y = 0;
//       }

//       // wait for the out transition to complete (if necessary)
//       this.app.$root.$once("triggerScroll", () => {
//         // if the resolved position is falsy or an empty object,
//         // will retain current scroll position.
//         resolve(position);
//       });
//     });
//   }
// };

const scrollBehavior = function (to, from) {
  return {
    x: 0,
    y: 600,
    behaviour: "smooth",
  };
};

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: "/",
      name: "home",
      // component: HomeView,
      meta: {
        scrollToTop: true,
      },
      components: {
        default: HomeView,
        sidebar: Sidebar,
        options: Options,
      },
    },
    {
      path: "/foo",
      name : 'foo',
      props: true,
      component: () => import("../views/Foo.vue"),
    },
    {
      path: "/bar",
      component: () => import("../views/Bar.vue"),
      // meta: {
      //   scrollToTop: true,
      // },
    },
    {
      path: "/about",
      name: "about",
      // redirect: { path: "customer" },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/about/AboutView.vue"),
      children: [
        {
          props: (route) => ({
            query: route.query,
          }),
          path: "company",
          component: () => import("../views/about/Child.vue"),
        },
      ],
    },
    {
      path: "/users/:id(\\d+)",
      name: "user-details",
      component: () => import("../components/Details.vue"),
    },
    {
      path: "/product/(books/)?:id",
      component: () => import("../components/Product.vue"),
    },
    {
      path: "*",
      component: () => import("../components/404.vue"),
    },
    {
      path: "/buyer-type",
      name: "buyer-type",
      component: () => import("../components/BuyerType.vue"),
      alias: ["/membership", "premium"],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   // Logic
//   console.log("to ", to, "from", from);

//   if (to.name == "about") return { name: "buyer-type" };
//   else return true;
// });

// router.afterEach((to, from) => {
//   sessionStorage.setItem("last-path", to.path);
// });
export default router;
