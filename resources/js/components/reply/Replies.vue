<template>
    <div>
        <reply v-if="content"
               v-for="(reply,index) in content"
               :key="reply.id"
               :index="index"
               :data="reply"></reply>
    </div>
</template>

<script>
import Reply from "./Reply";

export default {
    name: "Replies",
    components: {Reply},
    props: ['question'],
    data() {
        return {
            content: this.question.replies
        }
    },
    created() {
        this.listen()
    },
    methods: {
        listen() {
            EventBus.$on('newReply', (reply) => {
                this.content.unshift(reply)
            })

            EventBus.$on('deleteReply', (index) => {
                axios.delete(`/api/question/${this.question.slug}/reply/${this.content[index].id}`)
                    .then(this.content.splice(index, 1))
            })
        }
    }
}
</script>

<style scoped>

</style>
