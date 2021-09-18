<template>
    <div class="container">
        <v-form @submit.prevent="signup">
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>

            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>

            <v-text-field
                v-model="form.password_confirmation"
                label="Password Confirmation"
                type="password"
                required
            ></v-text-field>
            <!--            <span class="red&#45;&#45;text" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>-->

            <v-btn
                color="green" type="submit"
            >
                Sign Up
            </v-btn>

            <router-link to="/login">
                <v-btn
                    color="blue"
                >
                    Login Instead
                </v-btn>
            </router-link>

        </v-form>

    </div>
</template>

<script>
import User from "../../Helpers/User";

export default {
    name: "SignUp",
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            errors: {}
        }

    },
    methods: {
        signup() {
            axios.post('api/auth/signup', this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    this.$router.push('forum')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    //console.log(error.response.data);
                })
        }
    },
    created() {
        if (User.loggedIn()) {
            this.$router.push('forum')
        }
    }

}
</script>

<style scoped>

</style>
