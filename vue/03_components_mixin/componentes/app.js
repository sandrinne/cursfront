const app = new Vue({
    el: '#app',
    data: {
        courses: [
            {
                id: 1,
                title: 'Curso introductorio JavaScript',
                subtitle: 'Aprende lo básico en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios básicos',
                type: 'course-js',
                price: 10,
            },
            {
                id: 2,
                title: 'Curso avanzado JavaScript',
                subtitle: 'Aprende lo avanzado en JS',
                description: 'En este curso explicaremos de la mano de los mejores profesores JS los principios avanzados',
                type: 'course-js',
                price: 20,
            },
            {
                id: 3,
                title: 'Curso introductorio Cascading Style Sheets',
                subtitle: 'Aprende lo básico en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css',
                price: 10,
            },
            {
                id: 4,
                title: 'Curso avanzado Cascading Style Sheets',
                subtitle: 'Aprende lo avanzado en CSS',
                description: 'En este curso explicaremos de la mano de los mejores profesores CSS los principios básicos',
                type: 'course-css',
                price: 20,
            } ,
            { 
                id: 5,
                title: 'Curso introductorio Vue',
                subtitle: 'Aprende lo básico en Vue',
                description: 'En este curso explicaremos de la mano de los mejores profesores Vue los principios básicos',
                type: 'course-vue',
                price: 10,
            },
            {
                id: 6,
                title: 'Curso avanzado Vue',
                subtitle: 'Aprende lo avanzado en Vue',
                description: 'En este curso explicaremos de la mano de los mejores profesores Vue los principios avanzados',
                type: 'course-vue',
                price: 20,
            },
                                  
        ],
        cart: []
    },
    methods: {
        addToCart: function (course) {
            this.cart.push(course);
        }
    },
   
   
})

