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
}