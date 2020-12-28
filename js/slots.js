let betAmount = parseInt($('#betAmount').text());
let balance = parseInt($('#balance').text());
const images = ['img/cherry.png', 'img/grapes.png', 'img/heart.png', 'img/lemon.png', 'img/orange.png', 'img/seven.png', 'img/strawberry.png'];

$('#betMinus').click(function(){
  $('#betAmount').html(function(){
   if(betAmount > 1){
    betAmount--;
   }
   return betAmount});
});

$('#betPlus').click(function(){
 if(betAmount < balance){
  $('#betAmount').html(function(){
   betAmount++;
   return betAmount;
  });
 }
});

$(function(){
 $('#spin').click(function(){
  let random1 = Math.floor(Math.random() * images.length);
  let random2 = Math.floor(Math.random() * images.length);
  let random3 = Math.floor(Math.random() * images.length);
  if(betAmount <= balance){
   $('#slot1').attr('src', images[random1]);
   $('#slot2').attr('src', images[random2]);
   $('#slot3').attr('src', images[random3]);
  }

  if(random1 === random2 && random1 === random3){
   $('#header').html("Congratulations! You won!").css('color', 'red').fadeTo(100, 0.1).fadeTo(200, 1.0);
   let winBet = betAmount * 15;
   balance = balance + winBet;
   $('#balance').html(balance);
  }
  else{   
   if(balance >= betAmount){
    balance = balance - betAmount;
    $('#balance').html(balance);
    $('#header').fadeTo(100, 0.1, function(){
      if(balance === 0){
        $('#header').fadeTo(100, 0.1, function(){
          $(this).html("You lost all your money!").css('color', 'red').fadeTo(200, 1.0);
        });
      }
      else{
        $(this).html("You lost, spin again.").css('color', 'red').fadeTo(200, 1.0)
      }
    });
   }
   else{
    if(betAmount > balance && balance !== 0){
     $('#balance').html(balance);
     $('#header').fadeTo(100, 0.1, function(){
      $(this).html("Invalid bet amount, you do not have enough money to bet " + betAmount).css('color', 'red').fadeTo(200, 1.0);
     });
    }
   }
  }
 });
});
