document.addEventListener('DOMContentLoaded', (event) =>{
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    checkbox.addEventListener('change',() =>{
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.children.add('bark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });
    body.classList.add('light-mode')
});
const list= [
    {name1: 'sdfghjk',name2: 'fgh', img:'https://avatars.mds.yandex.net/i?id=cea2a1665377430679dd3c98c0e58f7f6e1655eb-10703682-images-thumbs&n=13'},
    { name1: 'sdfghjk',name2: 'fgh', img:'https://avatars.mds.yandex.net/i?id=b87a66cedf071d9320ce799938bca0e1_l-10704821-images-thumbs&n=13'}
];
 
const slides = document.
querySelector('.slides');
const prev = document.
querySelector('.prev');
const next = document.
querySelector('.next');

let currentIndex=0;
const update = () => {
    const item = list [Math.abs(currentIndex % list.length)];
    slides.innerHTML =
        '<div class="item">
            <ing src="${item.ing}">
            <div class="name">
                <h2>${item.name1}</h2>
                <h1>${item.name1}</h1>
            </div>
        </div>';
};

next.addEventListener(
    'click',
    () => {
        currentIndex +=1;
        update();
    },
);

prev.addEventListener(
    'click',
    () => {
        currentIndex -=1;
        update();
    },
);
