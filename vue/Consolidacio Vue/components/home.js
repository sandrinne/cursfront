Vue.component('home', {
    template: 
    `
    <div>
    <p> {{frase}} </p>
     </div>  
    `,
    props: ['frase'],
    // data: function() {
    //     return {         
    //        observacions:""
    //     }
    //  }   
   })