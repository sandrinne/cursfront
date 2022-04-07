Vue.component('my-button', {
    //template: "#boto",
    template: `
    <div>
    <br>
    <button @click="onAdd2">{{ count }} boto component {{ name }}</button>
    </div>
    `,
    data() {
    return {
    count: 0,
    name: "sandrinne"
    }
    },
    methods: {
    onAdd2() {
    this.count += 1
    }
    }
    })
    