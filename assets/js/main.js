
//== Slider Card moduleCards-1
new Glider(document.querySelector('.cardGlider1'), {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-cards1',
        next: '.next-cards1'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            slidesToShow: 2.5,
        }
    }]
});
//======================== /Slider Card moduleCards-1


//== Slider Card moduleCards-1
new Glider(document.querySelector('.cardGlider2'), {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-cards2',
        next: '.next-cards2'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            slidesToShow: 2.5,
        }
    }]
});
//======================== /Slider Card moduleCards-2


//== Slider Card moduleCards-3
new Glider(document.querySelector('.cardGlider3'), {
    slidesToShow: 1.1,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-cards3',
        next: '.next-cards3'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            slidesToShow: 2.5,
        }
    }]
});
//======================== /Slider Card moduleCards-1


//== Slider Card moduleReviews-2
new Glider(document.querySelector('.glider-reviews'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-reviews',
        next: '.next-reviews'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            slidesToShow: 2,
        }
    }]
});
//======================== /Slider Card moduleReviews-2


//== /Accordion Module
let accTitle = document.getElementsByClassName("acc-heading");
let accContent = document.getElementsByClassName("acc-content");
let singleMode = true;

for( let j=0; j<accContent.length; j++ ){
    let realHeight = accContent[j].offsetHeight;
    accContent[j].setAttribute("data-height", realHeight + "px");
    accContent[j].style.height = 0;
}

for( let i=0; i<accTitle.length; i++ ){
    accTitle[i].onclick = function(){
        let openedAcc = this.getAttribute('href').replace('#', '');

        if( this.classList.contains("active") ){
            this.classList.remove("active");
            document.getElementById(openedAcc).style.height = 0;
            
            return false;
        }
        
        if( singleMode ){						
            for(let k=0; k<accTitle.length; k++) {
                accTitle[k].classList.remove("active");
            }			


            for(let j=0; j<accContent.length; j++) {
                accContent[j].style.height = 0;
            }		
        }
        
        this.classList.add("active");
        
        
        
        document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
        
        return false;
    }
}
//======================== /Accordion Module