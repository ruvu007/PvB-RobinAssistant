<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4">
                    <img src="@/assets/images/logo.png" alt="Logo Robin Assistant">
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="sitemap">
                        <h4>Sitemap</h4>
                        <button @click="$emit('scrollTo', 'Home')">Home</button>
                        <button @click="$emit('scrollTo', 'WatIsRobin')">Wat is Robin?</button>
                        <button @click="$emit('scrollTo', 'Voordelen')">Voordelen</button>
                        <button @click="$emit('scrollTo', 'HoeWerktHet')">Hoe werkt het?</button>
                        <button @click="$emit('scrollTo', 'Contact')">Contact</button>
                        <a target="_blank" href="https://www.robinassists.me/privacy.pdf">Privacy policy</a>
                        <a target="_blank" href="https://www.robinassists.me/terms.pdf">Terms of use</a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="contactinformation">
                        <h4>Contact</h4>
                        <p>Robin Assistant</p>
                        <p>Waterman 134</p>
                        <p>1622 CX Hoorn</p>
                        <p>The Netherlands</p>
                        <a href="mailto:supper@robinassists.me"></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-center mt-5">
                    <p>© ℗ ® Bemika Software 2015-2022. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>

<script>
export default {

}
</script>
