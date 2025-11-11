$(function() {
    
   /*Nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle")
    
    navToggle.on("click", function(event){
        event.preventDefault;
        
        nav.toggleClass("show");
        navToggle.toggleClass("active");
    }); 

    /*Slider: https://kenwheeler.github.io/slick/*/
    let slider = $("#heroSlider");
    
    slider.slick ({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        appendArrows: $('.arrows_block'),
        dots: true
    });
    
    
    
    //Outside slider
    
    $('.img_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
      });
    
    /*Outside js*/
    let huntText = $("#huntText");
    let huntTextHiden = $ ("#hunt_text_hiden");
    let clickHunt = $("#click_hunt");
    let ClickHuntRemove = $("#click_hunt_remove");
    
    clickHunt.on("click", function(event){
        event.preventDefault;
        
        huntTextHiden.addClass("hiden");
        huntText.addClass("show");
    })
    
    ClickHuntRemove.on("click", function(event){
        event.preventDefault;
        
        huntTextHiden.removeClass("hiden");
        huntText.removeClass("show");
    })


    /*Inside Hunt Js*/
    let insideText = $("#insideText");
    let insideTextHiden = $ ("#inside_text_hiden");
    let insideTextThird = $ ("#inside_text_third");
    
    let ClickInside = $("#click_inside");
    let ClickInsideRemove = $("#click_inside_remove");
    let ClickInsideThird = $ ("#click_inside_third");
    
    ClickInside.on("click", function(event){
        event.preventDefault;
        
        insideTextHiden.addClass("hiden");
        insideText.addClass("show");
        insideTextThird.removeClass("show");
        
    })
    
    ClickInsideRemove.on("click", function(event){
        event.preventDefault;
        
        insideTextHiden.removeClass("hiden");
        insideText.removeClass("show");
        insideTextThird.removeClass("show");
    })
    
    ClickInsideThird.on("click", function(event){
        event.preventDefault;
        
        insideTextHiden.addClass("hiden");
        insideText.removeClass("show");
        insideTextThird.addClass("show");
        
    })
    
    
    
    /*Practicalities*/
    let practicalText = $("#practicalText");
    let practicalTextHiden = $ ("#practical_text_hiden");
    
    let ClickPractical = $("#click_practical");
    let ClickPracticalRemove = $("#click_practical_remove");
    
    ClickPractical.on("click", function(event){
        event.preventDefault;
        
        practicalTextHiden.addClass("hiden");
        practicalText.addClass("show");
    })
    
    ClickPracticalRemove.on("click", function(event){
        event.preventDefault;
        
        practicalTextHiden.removeClass("hiden");
        practicalText.removeClass("show");
    })
    
    
    /*Details Plus*/
    
    let serviceBO = $("#serviceBO");
    let serviceBT = $("#serviceBT");
    let serviceDO = $("#serviceDO");
    let serviceDT = $("#serviceDT");
    let serviceEC = $("#serviceEC");

    /*Breakfast for one*/
    serviceBO.on("click", function(event){
        event.preventDefault;
        serviceBO.toggleClass("active");
    });
    /*Breakfast for two*/
    serviceBT.on("click", function(event){
        event.preventDefault;
        serviceBT.toggleClass("active");
    });
    /*Classic diner for one*/
    serviceDO.on("click", function(event){
        event.preventDefault;
        serviceDO.toggleClass("active");
    });
    /*Classic diner for two*/
    serviceDT.on("click", function(event){
        event.preventDefault;
        serviceDT.toggleClass("active");
    });
    /*Electric Car Charge*/
    serviceEC.on("click", function(event){
        event.preventDefault;
        serviceEC.toggleClass("active");
    });
    
    /*Booking aside click*/

    let aside = $("#aside");
    let bookingRight = $("#bookingRight")
    
    aside.on("click", function(event){
        event.preventDefault;
        
        bookingRight.toggleClass("active");
    }); 

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.85; // Когда элемент появляется на 85% высоты экрана
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight -50;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom || scrollBottom) {
      box.classList.add('show'); // Добавляем класс — включается анимация
    } else {
      box.classList.remove('show'); // Можно убрать, если хочешь чтобы исчезали при скролле вверх
    }
  });
}

window.addEventListener('scroll', checkBoxes);
checkBoxes(); // Проверяем при загрузке 

});

