var $JQuery2 = jQuery.noConflict()
$JQuery2(function() {
   $JQuery2(".bt_pagamento-facilitado").hover(
      // função que adiciona a classe
      function(){
         $JQuery2(".bt_criacoes-exclusivas").addClass("redesAl");
      },
     
      // função que remove a classe
      function(){
         $JQuery2(".bt_criacoes-exclusivas").removeClass("redesAl");
      });
});

var $JQuery2 = jQuery.noConflict()
$JQuery2(function() {
   $JQuery2(".bt_pagamento-facilitado2").hover(
      // função que adiciona a classe
      function(){
         $JQuery2(".bt_criacoes-exclusivas").addClass("redesAl2");
      },
     
      // função que remove a classe
      function(){
         $JQuery2(".bt_criacoes-exclusivas").removeClass("redesAl2");
      });
});

