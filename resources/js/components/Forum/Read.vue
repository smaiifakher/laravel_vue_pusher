<template>
    <div v-if="question">
        <edit-question :data="question" v-if="editing">
        </edit-question>

        <show-question v-else :data="question"
        ></show-question>

    </div>

</template>

<script>
import ShowQuestion from "./ShowQuestion";
import EditQuestion from "./EditQuestion";

export default {
    name: "Read",
    components: {EditQuestion, ShowQuestion},
    created() {
        this.listen()
        this.getQuestion()
    },
    data() {
        return {
            question: null,
            editing: null
        }
    },
    methods: {
        listen() {
            EventBus.$on('startEditing', () => {
                this.editing = true
            })
            EventBus.$on('cancelEditing', () => {
                this.editing = false
            })
        },
        getQuestion() {
            axios.get(`/api/question/${this.$route.params.slug}`)
                .then(res => {
                    this.question = res.data.data
                })
        }
    },

}
</script>

<style scoped>

</style>
