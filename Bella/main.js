var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var div = document.querySelector('div');

var home = document.getElementById('home');
home.onmouseover = function(){
    div.innerHTML = '';
    var p = document.createElement('p');
    div.appendChild(p);
    var a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', '#');
    a.textContent = "Tickets";
    p.appendChild(a);
    var img = document.createElement('img');
    img.setAttribute('src', 'pictures/poster.jpg');
    img.setAttribute('align', 'right');
    div.appendChild(img);
    var a1 = document.createElement('a');
    a1.setAttribute('target', '_blank');
    a1.setAttribute('href', '#');
    a1.setAttribute('class', 'fa fa-facebook');

    var a2 = document.createElement('a');
    a2.setAttribute('target', '_blank');
    a2.setAttribute('href', '#');
    a2.setAttribute('class', 'fa fa-instagram');

    div.appendChild(a1);
    div.appendChild(a2);

}

var apply = document.getElementById('apply');
apply.onmouseover = function(){
    div.innerHTML = '';
    var para = document.createElement('p');
    para.textContent = "Application will be open on ...";
    para.style.color = "white";
    para.style.fontFamily = 'Ubuntu Condensed, sans-serif';
    para.style.fontSize = 40 + 'px';
    div.appendChild(para);
}

var about = document.getElementById('about');
about.onmouseover = function(){
    var contents = ["The Reel Loud Film and Arts Festival is an annual student-organized event at UC Santa Barbara that celebrates student films, art, music, dance, performance, and more. The festival is incredibly unique due to its focus on student-made, silent films with a twist - each film premieres with a band playing musical accompaniment live on stage.",
    "Besides films, Reel Loud hosts a pre-show courtyard reception that features original student art, live performances from local bands and DJs, custom photo booths, interactive art displays, and a silent auction, the proceeds of which are donated to a local Santa Barbara charity. Reel Loud aims to exhibit art in all shapes, sizes, and media, and unites the people of UCSB, Isla Vista, and Santa Barbara for a night of celebrating the immense creativity that exists within our local community.",
    "The theme for the 27th Annual Reel Loud Film and Arts Festival is \"Watch It Play Back\" - an ode to the era of physical media right before the switch to digital media at the cusp of the 1990s. Our vision for this theme was inspired by the aesthetic of the home videos that encapsulate our childhoods, and the nostalgia for film photography, VHS tapes, and analog TV.",
    "Reel Loud has been a traditional event at UC Santa Barbara for nearly 3 decades that combines art, philanthropy, performance, and community engagement into a wide-scale, dynamic event. The committee of the 27th Annual Reel Loud Film Festival is comprised of 25 students who have been working since September to organize this massive event in hopes of making it bigger than ever before."
    ];
    
    div.innerHTML = '';
    for(let i = 0; i < contents.length; i++){
        var p = document.createElement('p');
        p.textContent = contents[i];
        p.style.width = wWidth*0.2 + 'px';
        p.style.position = 'absolute';
        p.style.top = wHeight*0.3 + 'px';
        p.style.bottom = wHeight*0.1 + 'px';
        p.style.left =wWidth*0.02 + i*wWidth*0.05 + wWidth*0.2*i + 'px';
        p.style.color = "white";
        p.style.padding = 15 +'px';
        p.style.boxShadow = "10px 20px 30px gray";
        
        if(i == 0){p.style.backgroundColor = "hsla(0, 100%,15%, 1)";}
        else if(i == 1){p.style.backgroundColor = "hsla(0, 100%, 35%, 1)";}
        else if(i ==2){p.style.backgroundColor = "hsla(0, 100%, 60%, 1)";}
        else{p.style.backgroundColor = "hsla(0, 100%, 85%, 1)";}
        
        p.style.borderRadius = 10 + 'px';
        p.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
        div.appendChild(p);
    }
}

var rules = document.getElementById('rules');
rules.onmouseover = function(){
    div.innerHTML = '';
    var bulletPoints = [
        'Current UCSB students',
        'UCSB Alumni',
        'Santa Barbara County Community Members'
    ];
    var p1 = document.createElement('p');
    p1.textContent = "The festival is open to: ";
    p1.style.color = "white";
    p1.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    div.appendChild(p1);
    var ul = document.createElement('ul');
    for(let j = 0; j < bulletPoints.length; j++){
        var li = document.createElement('li');
        li.textContent = bulletPoints[j];
        li.style.color = "white";
        li.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
        ul.appendChild(li);
    }
    p1.appendChild(ul);
    
}

var contact = document.getElementById('contact');
var contactInfos = [['Mika Pham', 'Director', 'Email: mikaphams@ucsb.edu', 'Number: 999-999-9999'], ['Jake Ortega', 'Director', 'Email: jakeortega@ucsb.edu', 'Number: 000-000-0000']]
contact.onmouseover = function(){
    div.innerHTML = '';
    for(let k = 0; k < contactInfos.length; k++){
        var img = document.createElement('img');
                img.setAttribute('src', 'pictures/'+ contactInfos[k][0] +'.jpg');
                img.style.position = 'absolute';
                img.style.width = 10 + '%';
                img.style.left =  + wWidth*0.15 + wWidth*0.4*k + 'px';
                img.style.top = wHeight* 0.4 + 'px';
        for(let i = 0; i < contactInfos[k].length; i++){
            var p = document.createElement('p');
            p.textContent = contactInfos[k][i];
            p.style.color = "white";
            p.style.position = 'absolute';
            p.style.fontFamily = 'Ubuntu Condensed, sans-serif';
            if(i == 0){
                p.style.fontWeight = 'bold'; 
                p.style.fontSize = '2rem';
                p.style.left = wWidth*0.3 + wWidth*0.45*k + 'px';
                p.style.top =  wHeight*0.35 + 'px';
            }
            else{
                p.style.fontSize = '1rem'
                p.style.left = wWidth*0.3 + wWidth*0.45*k + 'px';
                p.style.top = wHeight*0.05*i + wHeight*0.44 + 'px';
            }
            div.appendChild(img);
            div.appendChild(p);
        }
    }
}