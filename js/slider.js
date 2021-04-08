const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

const indicadorParents = document.querySelector('.controls ul'); // obtiene la referencia del UL donde estan los dots

let sectionIndex = 0;

const setSelectedIndex = () => {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicadorParents.children[sectionIndex].classList.add('selected');
}

//// hace un loop al array de la lista para agregar el cambio de vista en el carousel
document.querySelectorAll('.controls li').forEach( (indicator, index)=> {

    indicator.addEventListener('click', ()=> {
    sectionIndex = index;

    setSelectedIndex();
    indicator.classList.add('selected');

    const strIndex = index * -25;
    slider.style.transform = `translate(${strIndex}%)`;    })

});

rightArrow.addEventListener('click', () => {

    sectionIndex < 3 ? sectionIndex = sectionIndex + 1 : sectionIndex = 0;
    const strIndex = sectionIndex * -25;
    slider.style.transform = `translate(${strIndex}%)`;

    setSelectedIndex();
});

leftArrow.addEventListener('click', () => {

    sectionIndex < 1 ? sectionIndex = 3 : sectionIndex = sectionIndex - 1;
    const strIndex = sectionIndex * -25;
    slider.style.transform = `translate(${strIndex}%)`;
    
    setSelectedIndex();
});
