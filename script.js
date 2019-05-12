window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';
    
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);
    
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };

        let descriptionBtn = document.querySelectorAll('.description-btn');
        descriptionBtn[b].addEventListener ('click', function () {
            overlay.style.display = 'block'; 
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener ('click', function() {
            overlay.style.display = 'none'; 
            descriptionBtn[b].classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    };
    
    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);   
                }
            }
        }
    });

    // Timer

    let deadline = '2019-05-16'; 

    function getTimeRemaining (endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = '0' + Math.floor((t/1000) % 60),
            minutes = '0' + Math.floor((t / 1000 / 60) % 60),
            hours = '0' + Math.floor(t/1000/60/60);

        
            
        if (t > 0) {
            return {
                'total' : t,
                'seconds' : seconds.slice(-2),
                'minutes' : minutes.slice(-2),
                'hours' : hours.slice(-2)
            };
        } else {
            return {
                'total' : t, 
                'seconds' : '00',
                'minutes' : '00',
                'hours' : '00'
            };
        };
        
    };  
    
    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'), 
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'), 
            timeInteval = setInterval (apdateTime, 1000);

        function apdateTime () {
            let t = getTimeRemaining (endtime); 
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval (timeInteval);
            }
        };
    };

    setClock ('timer', deadline);
    

    // Modal window 

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'), 
        close = document.querySelector('.popup-close');

    more.addEventListener ('click', function () {
        overlay.style.display = 'block'; 
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener ('click', function() {
        overlay.style.display = 'none'; 
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});


