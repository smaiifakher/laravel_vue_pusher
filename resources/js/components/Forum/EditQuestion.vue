<template>
    <v-container>
        <v-form>
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
            <v-card-actions>

                <v-btn
                    color="teal"
                >
                    <v-icon>save</v-icon>
                </v-btn>

                <v-btn
                >
                    <v-icon>delete</v-icon>
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
    }
}
</script>

<style scoped>

</style>
