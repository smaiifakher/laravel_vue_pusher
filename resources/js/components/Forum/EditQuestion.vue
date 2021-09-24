<template>
    <v-container>
        <v-form @submit.prevent="update">
            <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
            ></v-text-field>

            <!--            <v-select :items="categories"-->
            <!--                      v-model="form.category_id"-->
            <!--                      item-text="name"-->
            <!--                      item-value="id"-->
            <!--                      label="Category"-->
            <!--                      autocomplete-->
            <!--            ></v-select>-->

            <vue-simplemde v-model="form.body"></vue-simplemde>
            <v-card-actions>

                <v-btn
                    color="teal" type="submit"
                >
                    <v-icon>save</v-icon>
                </v-btn>

                <v-btn
                >
                    <v-icon @click="cancel">delete</v-icon>
                </v-btn>
            </v-card-actions>


        </v-form>
    </v-container>

</template>

<script>
export default {
    name: "EditQuestion",
    data() {
        return {
            form: {
                title: null,
                body: null,
            }
        }
    },
    props: ['data'],
    mounted() {
        this.form = this.data
    },
    methods: {
        cancel() {
            EventBus.$emit('cancelEditing')
        },

        update() {
            axios.patch(`/api/question/${this.form.slug}`, this.form)
                .then(res => {
                    this.cancel()
                }).catch(error => {
                    console.log(this.form)
                console.log(error.response.data)
                this.errors = error.response.data
            })
        }


    }
}
</script>

<style scoped>

</style>
