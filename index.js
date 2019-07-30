var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: 0,
    number2: 0,
    number3: 0
  },
  methods: { 
    computeSum: function() {
      console.log("this is working");
      console.log(this.number1 + this.number2 + this.number3);



    }
  }
});
