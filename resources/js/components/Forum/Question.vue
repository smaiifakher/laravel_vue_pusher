<template>
    <v-card class="mx-auto mt-2" max-width="344">

        <v-card-title class="headline mb-0">
            <div>
                <h3>
                    <router-link :to="question.path">
                        {{ question.title }}
                    </router-link>
                </h3>
                <v-card-subtitle class="gray--text">
                    {{ question.user }} said {{ question.created_at }}
                </v-card-subtitle>

            </div>
        </v-card-title>


        <v-card-text>
            {{ question.body }}
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                Explore
            </v-btn>
        </v-card-actions>


    </v-card>
</template>

<script>
export default {
    name: "Question",
    props: ['question']
}
</script>

<style scoped>

</style>
