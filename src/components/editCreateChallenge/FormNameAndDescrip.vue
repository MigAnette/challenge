<template>
<v-form>
        <!-- header with Navn: -->
         <h4>Navn:</h4>
       <!-- Input field for the name with actual name -->
        <v-text-field v-model="navn" required label="Navn på udfordring"></v-text-field>
        <!-- header with Beskrivelse: -->
         <h4>Beskrivelse:</h4>
        <!-- textbox for the description with acutal description-->
        <v-textarea outline auto-grow label="Beskriv din udfordring" v-model="beskrivelse"></v-textarea>

</v-form>
</template>

<script>
export default {
    name: 'FormNameAndDescrip',
    props: ['nameAndDescrip'],
    data() {
        return {
            navn: this.nameAndDescrip.udfordringNavn,
            beskrivelse: this.nameAndDescrip.udfordringDescrip
        }
    }
}
</script>

<style>

</style>
