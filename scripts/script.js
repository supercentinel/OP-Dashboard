let proyects = document.querySelector('#proyectsContent');
let anouncements = document.querySelector('#anouncementsContent');
let trends = document.querySelector('#trendingContent');

let loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';

proyects.children[0].children[0].textContent = 'Proyecto 1';

for (let i = 0; i < proyects.children.length; i++) {
    proyects.children[i].children[0].textContent = 'Proyecto ' + (i + 1);
}

for (let i = 0; i < proyects.children.length; i++) {
    proyects.children[i].children[1].textContent = loremText;
}

for (let i = 0; i < anouncements.children.length; i++) {
    anouncements.children[i].children[0].textContent = 'Anuncio ' + (i + 1);
}

for (let i = 0; i < anouncements.children.length; i++) {
    anouncements.children[i].children[1].textContent = loremText;
}

for (let i = 0; i < trends.children.length; i++) {
    trends.children[i].children[1].textContent = 'Tendencia ' + (i + 1);
}

for (let i = 0; i < trends.children.length; i++) {
    trends.children[i].children[2].textContent = 'subtexto';
}

for (let i = 0; i < trends.children.length; i++) {
    trends.children[i].children[0].src = '../resources/userpfp/1666945417231023.gif';
}
