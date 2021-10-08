import Constants from '../photographers/contact/constants/constants.js';

export default class Utils {
    createElement(section, article, className, id, template) {
        article = document.createElement('article');
        section.appendChild(article);
        article.className = className;
        article.id = `${id}`;
        article.innerHTML = template;
    }

    getTotalLikes(data){
        var total = 0;
        for(var i in data) { 
            total += data[i];
        }
        return total;
    }

    isString(val) {
        return typeof val === 'string' || ((!!val && typeof val === 'object') && Object.prototype.toString.call(val) === '[object String]');
    }

    isEmail(email) {
        if(this.isString(email)) return new Constants().constantsElements().regex.regexEmail.test(email.toLowerCase());
    }

    producePrompt(message, id, color) {
        document.getElementById(id).innerHTML = message;
        document.getElementById(id).style.color = color;
        document.getElementById(id).style.display = "block";
    }

    invalidMessage(element, message, errorClassName, color) {
        element.classList.add('invalid');
        this.producePrompt(message, errorClassName , color)
    }

    removeInvalidMessage(element, message, errorClassName, color) {
        element.classList.remove('invalid');
        this.producePrompt(message, errorClassName, color)
    }
}