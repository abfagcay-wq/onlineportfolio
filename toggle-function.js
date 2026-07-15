// Toggle function for expandable cards
function toggleCard(cardId) {
    const cardContent = document.getElementById(cardId);
    const arrow = event.currentTarget.querySelector('span:last-child');
    
    if (cardContent.style.display === 'none' || cardContent.style.display === '') {
        cardContent.style.display = 'block';
        arrow.innerText = '▲';
    } else {
        cardContent.style.display = 'none';
        arrow.innerText = '▼';
    }
}
