<template>
    <div>
        <RouterView />
    </div>
</template>

<script>
// import { VueRecaptcha } from "vue-recaptcha";
export default {
    components: {
        ProductComponent: () => import("@/components/Product.vue"),
    },

    data() {
        return {
            msg: "",
        };
    },

    created() {
        // const lastPath = sessionStorage.getItem("last-path");
        // if (lastPath) this.$router.push(lastPath);

        let book = {
            title: "Attitude is everything",
            id: 20,
            category: {
                name: "Motivation",
            },
        };

        let {
            title,
            category: { name },
        } = book;

        // let { name } = category;

        console.log("book ", title);

        console.log("book category name ", name);
    },

    methods: {
        userRoutePushed(route) {
            console.log("route visited user ", route);
        },
        goToCompany() {
            this.$router
                .push({
                    path: "/about/company",
                    query: { id: 230, companyName: "Ambuja" },
                })
                .then((resolved) => {
                    console.log("promise resolved", this.$router);
                });
        },

        afterLeave() {
            console.log("insdie after leave transition");
            this.$root.$emit("triggerScroll");
        },
    },
};
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
