<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.user }}</div>
                <div class="ml-2">said {{ data.created_at }}</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="reply"></v-card-text>
            <v-divider></v-divider>
            <v-card-actions v-if="own">
                <v-btn icon small>
                    <v-icon color="orange">edit</v-icon>
                </v-btn>
                <v-btn icon small>
                    <v-icon color="red">delete</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import User from "../../Helpers/User";

export default {
    name: "Reply",
    props: ['data', 'index'],
    data() {
        return {}
    },
    computed: {
        own() {
            console.log(this.data.user_id)
            User.own(this.data.user_id)
        },
        reply(){
            return Simplemde.parse(this.data.reply)
        }
    },
    methods: {
        destroy() {
            EventBus.$emit('deleteReply', this.index)
        }
    },

}
</script>

<style scoped>

</style>
