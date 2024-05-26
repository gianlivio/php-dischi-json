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
        });
        
    },
    methods: {

        // metodo per il like del disco
        toggleLike(disc) {
            // Se disc.like è true, !disc.like diventa false. E viceversa.
            // Al click sul pulsante, il valore di disc.like viene invertito da true a false o da false a true.
            disc.like = !disc.like;
            // console.log(disc.like);
        }
    }
}).mount("#app");