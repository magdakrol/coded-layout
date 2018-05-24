document.getElementById('menuicon').addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('open');
    // document.getElementById('menu').classList.toggle('open');
});



$(document).ready(function () {

    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll:1,
        arrows: false,
        autoplay: true 

       });


    document.getElementById('plus').addEventListener('click', function() {
        increment();
    });

    document.getElementById('minus').addEventListener('click', function() {
        decrement();
    });

    document.getElementById('quantityValue').addEventListener('keyup', function(){
        
        changeValue();

    });
});

function getValue() {

    var quantityValue = document.getElementById('quantityValue').value;
    return quantityValue;
}

getValue();

function increment()
{
    var currentValue = getValue();
    currentValue++;
    if (currentValue > 999) {
        currentValue = 999;
    }
    setValue(currentValue);
}

function decrement()
{
    var currentValue = getValue();
    currentValue--;
    if (currentValue < 1) {
        currentValue = 1;
    }
    setValue(currentValue);
}

function setValue(newValue)
{
   document.getElementById('quantityValue').value = newValue;
}

function changeValue()
{
    var currentValue = getValue();
    console.log(parseInt(currentValue));
    console.log(parseInt(currentValue) == currentValue);
    if ((isNaN(parseInt(currentValue)) || parseInt(currentValue) != currentValue) && currentValue!='') {
        currentValue = 1;
        setValue(currentValue);
    } 
}



    
  


