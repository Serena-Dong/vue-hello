const data = [ 
    {
    text: "messaggio",
    image: 'https://api.lorem.space/image/furniture?w=1000&h=500'
    }
]

const app = Vue.createApp({
    data() {
        return{
            message: data[0].text,
            img: data[0].image
        }
    }
});

app.mount('#app')