    $(document).ready(function(){

    let $btns = $('button');
    $btns.click(function(e){
        console.log
    $('button').removeClass('active');
    e.target.classList.add('active');
    let selector = $(e.target).attr("data-filter");
    $('.grid').isotope({ 
        filter: selector
    });
       
        return false;
    })

   });
