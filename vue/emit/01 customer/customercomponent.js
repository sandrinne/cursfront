Vue.component('customercomponent',{
    template :
    `
    <div class = "Table">
     <div class = "Row"  v-bind:style = "styleobj">
         <div class = "Cell"><p>{{itr.fname}}</p></div>
         <div class = "Cell"><p>{{itr.lname}}</p></div>
         <div class = "Cell"><p>{{itr.addr}}</p></div>
         <div class = "Cell"><p> observaciones
            <button v-on:click = "$emit('removeelement', obs)">x</button></p> 
         </div>
      </div>
      </div>
    `,
    props: ['itr', 'index'],
    data: function() {
       return {
          styleobj : {
             backgroundColor:this.getcolor(),
             fontSize : 20
          },
          obs:"",
       }
    },
    methods:{
       getcolor : function() {
          if (this.index % 2) {
             return "#FFE633";
          } else {
             return "#D4CA87";
          }
       }
    }
 });