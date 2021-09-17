<template>
    <div>
        <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Tutorial</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn text>
                Forum
            </v-btn>
            <v-btn text>
                Ask Question
            </v-btn>
            <v-btn text>
                Category
            </v-btn>
            <router-link to="/login">
                <v-btn text>
                    Login
                </v-btn>
            </router-link>

        </v-toolbar>
    </div>
</template>


<script>
export default {
    name: "Toolbar",

}
</script>

<style scoped>

</style>
