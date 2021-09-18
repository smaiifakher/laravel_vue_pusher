<template>
    <div>
        <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Tutorial</v-toolbar-title>
            <v-spacer></v-spacer>


            <router-link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show">

            <v-btn text>
                {{ item.title }}
            </v-btn>
            </router-link>


        </v-toolbar>
    </div>
</template>


<script>
import User from "../Helpers/User";

export default {
    name: "Toolbar",
    data() {
        return {
            items: [
                {title: 'Forum', to: '/forum', show: true},
                {title: 'Ask', to: '/ask', show: User.loggedIn()},
                {title: 'Category', to: '/category', show: User.loggedIn()},
                {title: 'Login', to: '/login', show: !User.loggedIn()},
                {title: 'Log Out', to: '/logout', show: User.loggedIn()},
            ]
        }
    },
    created() {
        EventBus.$on('logout',()=>{
            User.loggedOut()
        })
    }

}
</script>

<style scoped>

</style>
