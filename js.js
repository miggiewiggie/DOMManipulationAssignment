function showFilter()
{
    document.getElementById("newContent").style.display = "none";
    document.getElementById("filterContent").style.display = "block";
}

function showAddNew()
{
    document.getElementById("newContent").style.display = "block";
    document.getElementById("filterContent").style.display = "none";
}

function addNewArticle()
{
    let newArticle = document.createElement("article");
    let articleType = document.querySelector('input[name="articleType"]:checked').id;
    let articleTitle = document.querySelector('input[name="inputHeader"]').value;
    let articleParagraph = document.querySelector("#inputArticle").value;

    articleType = articleType.replace("Radio","");

    if(articleType == "life"){
        articleType = "update";
    }

    let heading = document.createElement('h2');
    heading.textContent = articleTitle;

    let span = document.createElement('span');
    span.classList.add('marker');
    span.textContent = articleType.charAt(0).toUpperCase() + articleType.slice(1);

    let paragraph = document.createElement('p');
    paragraph.textContent = articleParagraph;

    let readMore = document.createElement('a');
    let readMorePara = document.createElement('p');
    readMore.textContent = "Read more...";
    readMore.href = "moreDetails.html";
    readMorePara.appendChild(readMore);

    newArticle.classList.add(articleType);
    newArticle.appendChild(span);
    newArticle.appendChild(heading);
    newArticle.appendChild(paragraph);
    newArticle.appendChild(readMorePara);
    document.querySelector("#articleList").appendChild(newArticle);
}

function filterArticles()
{
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let unchecked = [];
    let checked = [];
    
    checkboxes.forEach(checkbox => {
        if(!checkbox.checked){
            unchecked.push(checkbox.id.replace("Checkbox",""));
        }
        else{
            checked.push(checkbox.id.replace("Checkbox",""));
        }
        
    });
    
    unchecked.forEach(filter => {
        switch(filter){
            case "opinion":
                document.querySelectorAll(".opinion").forEach(article =>
                {
                    article.style.display = "none";
                });
                break;
            case "update":
                document.querySelectorAll(".update").forEach(article =>
                {
                    article.style.display = "none";
                });
                break;
            case "recipe":
                document.querySelectorAll(".recipe").forEach(article =>
                {
                    article.style.display = "none";
                });
                break;  
        }
    })

    checked.forEach(filter => {
        switch(filter){
            case "opinion":
                document.querySelectorAll(".opinion").forEach(article =>
                {
                    article.style.display = "";
                });
                break;
            case "update":
                document.querySelectorAll(".update").forEach(article =>
                {
                    article.style.display = "";
                });
                break;
            case "recipe":
                document.querySelectorAll(".recipe").forEach(article =>
                {
                    article.style.display = "";
                });
                break;  
        }
    })



}

