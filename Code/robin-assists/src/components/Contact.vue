<template>
    <div class="contact">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-10 offset-md-1 col-lg-4 offset-lg-1">
                    <h3>Contact</h3>

                    <form>
                        <label for="bedrijfsnaam">Bedrijf</label>
                        <input type="text" id="bedrijfsnaam">

                        <label for="fullname">Volledige Naam*</label>
                        <input type="text" id="fullname">

                        <label for="email">E-mail*</label>
                        <input type="email" id="email">

                        <label for="phonenumber">Telefoon nummer</label>
                        <input type="tel" id="phonenumber">

                        <label for="message">Bericht*</label>
                        <textarea id="message" cols="54" rows="10"></textarea>
                        <br />
                        <input type="checkbox" id="tos">
                        <label for="tos">Door dit formulier in te dienen, stemt de gebruiker ermee in dat de website de ingediende informatie verzamelt en verstrekt aan het Robin Assistant Support team.</label>
                        <br />
                        <input type="Submit" value="Versturen">
                    </form>
                </div>
                <div class="col-12 col-lg-5 offset-lg-2 col-xl-6 offset-xl-1 reset-bootstrap-padding">
                    <img src="@/assets/images/Contact.png" alt="Contact foto">
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
