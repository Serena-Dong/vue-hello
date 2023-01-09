const data = {
    text: "messaggio"
}

const app = Vue.createApp({
    data() {
        return{
            message: data
        }
    }
});

app.mount('#app')