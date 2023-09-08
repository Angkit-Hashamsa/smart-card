const showmore = document.querySelector('.sc-card-features__show-more');
const AllCollapsedCards = document.querySelectorAll('.sc-card-features__collapsed')
showmore.addEventListener('click', (e) => {
    const showMore = e.currentTarget;
    showMore.textContent = showMore.classList.toggle('sc-card-features__show') ? 'Show Less' : 'Show More';

    AllCollapsedCards.forEach(Element=>{
        Element.classList.toggle('sc-card-features__show-cards')
    })
});
