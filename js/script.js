const vm2 = Vue.createApp({
    data() {
        return {
            date: new Date().getFullYear(),
        }
    }
}).mount('#footer');