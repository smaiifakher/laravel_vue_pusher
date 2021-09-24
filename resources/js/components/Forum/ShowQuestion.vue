<template>
    <v-card>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">
                        {{ data.title }}
                    </div>
                    <v-card-subtitle class="grey--text">
                        {{ data.user }} said {{ data.created_at }}
                    </v-card-subtitle>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="teal" dark>
                   {{ data.replies_count}}  replies
                </v-btn>
            </v-card-title>
            <v-card-text v-html="data.body"></v-card-text>

            <v-card-actions v-if="own">
                <v-btn icon small>
                    <v-icon color="orange" @click="edit">edit</v-icon>
                </v-btn>

                <v-btn icon small>
                    <v-icon color="red" @click="destroy">delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-container>
    </v-card>

</template>

<script>
import User from "../../Helpers/User";

export default {
    name: "ShowQuestion",
    props: ['data'],
    data() {
        return {
            own: User.own(this.data.id)
        }
    },
    computed: {
        body() {
            return Simplemde.parse(this.data.body)
        }
    },
    methods: {
        destroy() {
            axios.delete(`/api/question/${this.data.slug}`)
                .then(res => {
                    this.$router.push('/forum')
                    console.log('deleted')
                }).catch(error => console.log((error.response.data)))
        },
        edit() {
            EventBus.$emit('startEditing')
        }
    }
}
</script>

<style scoped>
</style>
