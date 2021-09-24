<template>

    <v-card
        class="mx-auto"
        max-width="300"
        tile
    >
        <v-toolbar color="cyan" dense class="mt-2" dark>
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list shaped>
            <v-list-item
                v-for="category in categories"
                :key="category.id"
            >
                <v-list-item-content>
                    <v-list-item-title v-text="category.name"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-list>
    </v-card>

</template>

<script>
export default {
    name: "AppSideBar",
    created() {
        axios.get('/api/category')
            .then(res => {
                this.categories = res.data.data
            })
    },
    data() {
        return {
            categories: {},
        }
    }
}
</script>

<style scoped>

</style>
