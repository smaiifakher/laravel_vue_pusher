<template>
    <div class="container">

        <v-form @submit.prevent="login">

            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>

            <v-btn
                color="green" type="submit"
            >
                login
            </v-btn>

        </v-form>

    </div>
</template>


<script>
import User from "../../Helpers/User";

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: null,
                password: null,
            }
        }
    },
    methods: {
        login() {
            User.login(this.form)
        }
    }

}
</script>
<style scoped>

</style>
