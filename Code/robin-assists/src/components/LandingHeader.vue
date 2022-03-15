<template>
    <div class="landingheader" :style="{'background-image':'url(https://cdn.discordapp.com/attachments/618177603202842667/952999192102572052/AdobeStock_301664373.png)'}">
        <div class="welcome-text">
            <h1>Robin Assistant service,
                jouw dagelijkse assistent
            </h1>

            <button @click="$emit('scrollTo', 'WatIsRobin')" class="continue-button">Leer meer</button>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>

<script>
export default {
  name: 'LandingHeader'
}
</script>
