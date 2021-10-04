export default class Footer {
    templateFooter(likes, price) {
        return `
        <footer class="footer">
            <div class="footer__column">
                <span class="footer__like">${likes}</span>
                <i class="fas fa-heart footer__icon__heart"></i>
            </div>
            <div class="footer__column">
                <span class="footer__price">${price}€ / jour</span>
            </div>
        </footer>
        `
    }
}