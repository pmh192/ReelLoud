var apply = document.getElementById('apply');
var div = document.querySelector('div');
apply.onmouseover = function(){
    div.innerHTML = '';
    var para = document.createElement('p');
    para.textContent = "Application will be open on ...";
    para.style.color = "white";
    para.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
    div.appendChild(para);
}

var about = document.getElementById('about');
about.onmouseover = function(){
    var contents = ["The Reel Loud Film and Arts Festival is an annual student-organized event at UC Santa Barbara that celebrates student films, art, music, dance, performance, and more. The festival is incredibly unique due to its focus on student-made, silent films with a twist - each film premieres with a band playing musical accompaniment live on stage.",
    "The Reel Loud Film and Arts Festival is an annual student-organized event at UC Santa Barbara that celebrates student films, art, music, dance, performance, and more. The festival is incredibly unique due to its focus on student-made, silent films with a twist - each film premieres with a band playing musical accompaniment live on stage. In addition to films, Reel Loud hosts a pre-show courtyard reception that features original student art, live performances from local bands and DJs, custom photo booths, interactive art displays, and a silent auction, the proceeds of which are donated to a local Santa Barbara charity. Reel Loud aims to exhibit art in all shapes, sizes, and media, and unites the people of UCSB, Isla Vista, and Santa Barbara for a night of celebrating the immense creativity that exists within our local community.",
    "The theme for the 27th Annual Reel Loud Film and Arts Festival is \"Watch It Play Back\" - an ode to the era of physical media right before the switch to digital media at the cusp of the 1990s. Our vision for this theme was inspired by the aesthetic of the home videos that encapsulate our childhoods, and the nostalgia for film photography, VHS tapes, and analog TV.",
    "Reel Loud has been a traditional event at UC Santa Barbara for nearly 3 decades that combines art, philanthropy, performance, and community engagement into a wide-scale, dynamic event. The committee of the 27th Annual Reel Loud Film Festival is comprised of 25 students who have been working since September to organize this massive event in hopes of making it bigger than ever before."
    ];
    
    div.innerHTML = '';
    for(let i = 0; i < contents.length; i++){
        var p = document.createElement('p');
        p.textContent = contents[i];
        p.style.color = "white";
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