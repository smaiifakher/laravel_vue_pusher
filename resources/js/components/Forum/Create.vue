<template>
    <v-container>
        <v-form @submit.prevent="create">

            <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
            ></v-text-field>

            <v-select :items="categories"
                      v-model="form.category_id"
                      item-text="name"
                      item-value="id"
                      label="Category"
                      autocomplete
            ></v-select>

            <vue-simplemde v-model="form.body"></vue-simplemde>

            <v-btn
                color="green" type="submit"
            >Create
            </v-btn>


        </v-form>
    </v-container>
</template>

<script>
import VueSimplemde from "vue-simplemde";

export default {
    name: "Create",
    components: {VueSimplemde},
    data() {
        return {
            form: {
                title: null,
                category_id: null,
                body: null,
            },
            categories: {},
            errors: {},
        }
    },
    methods: {
        create() {
            axios.post('/api/question', this.form)
                .then(res => {
                    console.log(res.data);
                    this.$router.push(res.data.path);
                }).catch(error => {
                console.log(error.response.data)
                this.errors = error.response.data
            })
        }
    },
    created() {
        axios.get('/api/category')
            .then(res => this.categories = res.data.data
            )
    },

}
</script>

<style scoped>
</style>
