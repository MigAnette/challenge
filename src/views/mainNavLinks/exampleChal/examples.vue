<template>
    <div>
        <!-- back arrow going back to frontpage if not signed up -->
        <back-arrow></back-arrow>
        <!-- Header with Udfordringer -->
            <!-- H1 for desktop: -->
            <h1 class="text-xs-center hidden-md-and-down desktopH1">Udfordringer</h1>
            <!-- H1 for everything else: -->
            <h1 class="text-xs-center hidden-md-and-up">Udfordringer</h1>
        <!-- box with challenge v-for have link to the specific challenge-->
            <!-- text Udfordring-Name -->
                <!-- text Trin 1 -->
                <!-- text Trin 2 -->
                <!-- text Trin 3 -->


    </div>
</template>

<script>
import BackArrow from '@/components/navigation/BackArrow';

export default {
    name: 'Examples',
    components: {
        BackArrow
    },
    data() {
        return {

        }
    },
    created() {
        // get udfordring with trin from eksempler
    }
}
</script>

<style>
.desktopH1 {
    margin-top: 10vh;
}
</style>
