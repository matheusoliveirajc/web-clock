/*const clock_container = document.querySelector('#clock-container');
clock_container.innerHTML = `<div id="clock">
                                <p class="day-html"></p>
                                <div class="time">
                                <span class="hour-minute"></span>
                                <span class="seconds"></span>
                                </div>
                            </div>
                            <picture id="photo">
                                <img id="image"/>
                            </picture>`;
const time = document.querySelector('.time');
const day_html = document.querySelector('.day-html');
const hour_minute = document.querySelector('.hour-minute');
const seconds = document.querySelector('.seconds');
const image = document.querySelector('#image');
const footer = document.querySelector('footer');
const linkDev = document.querySelector('.link-dev');
setInterval(function(){
    let day = new Date().getDay();
    let day_list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day_html.textContent = `${day_list[day]}, ${new Date().getDate()}/${Number(new Date().getMonth()) + 1}/${new Date().getFullYear()}`;
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    if(hour <= 12 && hour >= 5){
        document.body.style.backgroundColor = 'var(--morning-body)';
        clock_container.style.backgroundColor = "var(--morning-clock)";
        image.src = 'images/dia.jpg';
        seconds.style.backgroundColor = 'rgba(240, 240, 240, .5)';
    }else if(hour < 18 && hour > 12){
        document.body.style.backgroundColor = 'var(--afternoon-body)';
        clock_container.style.backgroundColor = "var(--afternoon-clock)";
        day_html.classList.add('light');
        time.classList.add('light');
        seconds.style.backgroundColor = 'rgba(0, 0, 0, .340)';
        image.src = 'images/tarde.jpg';
        footer.classList.add('light');
        linkDev.classList.add('light');
    }else{
        document.body.style.backgroundColor = 'var(--night-body)';
        clock_container.style.backgroundColor = "var(--night-clock)";
        day_html.classList.add('light');
        time.classList.add('light');
        seconds.style.backgroundColor = 'rgba(0, 0, 0, .360)';
        image.src = 'images/noite.jpg';
        footer.classList.add('light');
        linkDev.classList.add('light');
    }
    if(hour < 10){hour = `0${hour}`}
    if(minute < 10){minute = `0${minute}`}
    if(second < 10){second = `0${second}`}
    hour_minute.textContent = `${hour}:${minute}`;
    seconds.textContent = second;
});*/
//Relógio
/*setInterval(()=>{
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if(hour < 10){hour = `0${hour}`;}
    if(minute < 10){minute = `0${minute}`;}
    if(seconds < 10){seconds = `0${seconds}`;}
    document.querySelector('.hour-minute').textContent = `${hour}:${minute}`;
    document.querySelector('.seconds').textContent = seconds;
});*/
//Imagem de fundo