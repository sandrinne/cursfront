var vm = new Vue({
    el: '#databinding',
    data: {
       fname: '',
       lname: '',
       addr: '',
       custdet: [],
       styleobj: {
          backgroundColor: '#2196F3!important',
          cursor: 'pointer',
          padding: '8px 16px',
          verticalAlign: 'middle',
       }
    },
    methods: {
       showdata: function () {
          this.custdet.push({
             fname: this.fname,
             lname: this.lname,
             addr: this.addr
          });
          this.fname = "";
          this.lname = "";
          this.addr = "";
          console.log(this.custdet);
       },
       eliminar: function (obs, index) {
          alert ("registro eliminado " + "debido a: " + obs)
          this.custdet.splice(index, 1)
       }
    }
 });