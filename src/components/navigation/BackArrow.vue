<template>
    <v-btn fab icon outline small color="teal" @click="goBack" class="hidden-lg-and-up">
        <v-icon large>arrow_back</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'BackArrow',
    data() {
        return {

        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>
