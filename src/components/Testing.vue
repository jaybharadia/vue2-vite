<template>
    <div>
        Testing Route
        <button @click="handle">Testing route</button>
    </div>
</template>

<script>
export default {
    methods: {
        handle() {
            this.$router
                .replace({
                    name: "user-upsert",
                    params: {
                        user: "jpb",
                    },
                })
                .then()
                .catch();

            // this.$router.push({
            //     name: "user-upsert",
            //     params: {
            //         user: "jpb",
            //     },
            // });
        },
    },
};
</script>

<style scoped></style>
