<template>
    <div class="mt-4">
        <vue-simplemde v-model="body"></vue-simplemde>
        <v-btn color="green" @click="submit">
            Reply
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "newReply",
    props: ['QuestionSlug'],
    data() {
        return {
            body: null
        }
    },
    methods: {
        submit() {
            axios.post(`/api/question/${this.QuestionSlug}/reply`, {body: this.body})
                .then(res => {
                    console.log(res.data)
                    EventBus.$emit('newReply', res.data.reply)
                    this.body = ''
                    window.scrollTo(0,0)
                })
        }
    }
}
</script>

<style scoped>

</style>
