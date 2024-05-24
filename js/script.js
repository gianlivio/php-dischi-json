const {createApp} = Vue;

createApp({
    data() {
        return {
            discs: [],
            messaggio: 'ciaooo'
        };
    },
    created() {
        axios

        // chiamata axios (num di tel)
        .get("http://localhost/boolean/php-dischi-json/server.php")

        // dati forniti in console
        .then((resp) => {
            
            console.log(resp)

            // salvataggio dati in array discs ----resp(parola fantoccio).data.results(percorso in console)
            this.discs = resp.data.results;
        })
        
    }
}).mount("#app");