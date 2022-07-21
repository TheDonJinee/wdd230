const getData = "js/temples.json";
const display = document.querySelector('article');

async function getTemple () {
    let response = await fetch(getData);
    if (response.ok) {
        let data = await response.json();
        console.log(data)
        displayTemples(data)
    } else {
        throw Error(response.statusText)
    }
}

function displayTemples(data) {
    data.temple.forEach(theTemple => {
        let card = document.createElement('section');
        let photo = document.createElement('img');
        let pa = document.createElement('p');
        let pb = document.createElement('p');
        let pc = document.createElement('p');
        let pd = document.createElement('p');
        let pe = document.createElement('p');
        let pf = document.createElement('p');
        let pg = document.createElement('p');
        let ph = document.createElement('p');
        let pi = document.createElement('p');
        let pj = document.createElement('p');
        let pk = document.createElement('p');
        let h4 = document.createElement('h4');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
        let p7 = document.createElement('p');
        let p8 = document.createElement('p');
        let p9 = document.createElement('p');
        let p10 = document.createElement('p');
        let h3 = document.createElement('h3');
        let h4i = document.createElement('h4');
        let h4ii = document.createElement('h4');
        let h4iii = document.createElement('h4');
        let h4iv = document.createElement('h4');

        let btn = document.createElement('button');
        let span = document.createElement('span');
        let span2 = document.createElement('span');


        h3.innerHTML = theTemple.name;
        pa.innerHTML = `Address: ${theTemple.address}`;
        p1.innerHTML = theTemple.history;
        p2.innerHTML = `Email: ${theTemple.email}`;
        h4i.innerHTML = 'Service Schedule';
        p3.innerHTML = theTemple.service1;
        p4.innerHTML = theTemple.service2;
        p5.innerHTML = theTemple.service3;
        p6.innerHTML = theTemple.service4;
        h4ii.innerHTML = 'Ordinance Schedule';
        p7.innerHTML = theTemple.ordinacesschedule1;
        p8.innerHTML = theTemple.ordinacesschedule2;
        p9.innerHTML = theTemple.ordinacesschedule3;
        p10.innerHTML = theTemple.ordinacesschedule4;
        pb.innerHTML = `Phone: ${theTemple.telephone}`;
        span.innerHTML = theTemple.like;
        span2.innerHTML = theTemple.like2;
        h4iii.innerHTML = 'Temple Closure Schedule';
        pc.innerHTML = theTemple.templecl1;
        pd.innerHTML = theTemple.templecl2;
        pe.innerHTML = theTemple.templecl3;
        pf.innerHTML = theTemple.templecl4;
        pg.innerHTML = theTemple.templecl5;
        ph.innerHTML = theTemple.templecl6;
        pi.innerHTML = theTemple.templecl7;
        pj.innerHTML = theTemple.templecl18;
        pk.innerHTML = theTemple.templecl19;
        h4.innerHTML = 'History';
        h4iv.innerHTML = 'Ordinance Schedule';


        photo.setAttribute('src', theTemple.image);
        photo.setAttribute('alt', theTemple.name);
        photo.setAttribute('loading', 'lazy'); //history email services tem clos sch add tel ord sch like

        card.append(photo);
        card.append(h3);
        card.append(pa);
        card.append(p2);
        card.append(pb);
        card.append(h4);
        card.append(p1);
        card.append(h4i);
        card.append(p3);
        card.append(p4);
        card.append(p5);
        card.append(p6);
        card.append(h4ii);
        card.append(p7);
        card.append(p8);
        card.append(p9);
        card.append(p10);
        card.append(h4iii);
        card.append(pc);
        card.append(pd);
        card.append(pe);
        card.append(pf);
        card.append(pg);
        card.append(ph);
        card.append(pi);
        card.append(pj);
        card.append(pk);
        btn.append(span2);
        card.append(btn)
        // card.append(span);
        // card.append(span2);

        display.appendChild(card)

        let id = 'id';
        let letlike = "letlike"

        btn.setAttribute(id, letlike);
        
        span.setAttribute('id', 'willLike');
        span2.setAttribute('id', 'liked');
        span.setAttribute('class', 'likey');
        span2.setAttribute('class', 'likey');
        
        
});
}

getTemple();

const btn = document.querySelector('#letlike')
const span2 = document.querySelector('#liked')

btn.classList.toggle('open')


    
if (btn.classList.contains('open')) {
    colorLike = 'red'
    span2.style.color = colorLike
    let saveLikeNow = localStorage.getItem('iLike')
    localStorage.setItem('iLike', colorLike)
    span2.style.color = saveLikeNow;
} else if (!btn.classList.contains('open')) {
    colorLike = 'blue'
    span2.style.color = colorLike
    let saveLikeNow = localStorage.getItem('iLike')
    localStorage.setItem('iLike', colorLike)
    span2.style.color = saveLikeNow;
}


