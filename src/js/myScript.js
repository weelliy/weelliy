function type(){
    let siteType = prompt("Выберите тип сайта из перечисленного и выпишите в поле ответа:\n* Лендинг\n* Корпоративный\n* Интернет-магазин")
    let book = {
        Лендинг: 2000,
        Корпоративный: 5000,
        "Интернет-магазин": 4000,
    }
    if (siteType in book){
        alert(book[siteType])
        return book[siteType]
    } 
    else{
        alert("Вы ввели что-то неправильно")
        cost()
    }
}

function design(costType){
    let siteDesign = prompt("Выберите вариацию дизайна сайта из перечисленного и выпишите в поле ответа:\n* На вкус заказчика\n* Не важно")
    let book = {
        "Не важно": 0,
        "На вкус заказчика": 3000,
    }
    if (siteDesign in book){
        alert(`${book[siteDesign]} + ${costType} = ...`)
        return book[siteDesign]
    }
    else{
        alert("Вы ввели что-то неправильно")
        cost()
    }
}

function adaptability(costType, costDesign){
    let siteAdaptability = prompt("Выберите вариацию адаптивности сайта из перечисленного и выпишите в поле ответа:\n* Адаптивный\n* Не адаптивный")
    let book = {
        "Не адаптивный": 0,
        "Адаптивный": 2000,
    }
    if (siteAdaptability in book){
        alert(`${book[siteAdaptability]} + ${costDesign} + ${costType} = ...`)
        return book[siteAdaptability]
    }
    else{
        alert("Вы ввели что-то неправильно")
        cost()
    }
}

function deadlines(costType, costDesign, costAdaptability){
    let siteDeadlines = prompt("Выберите сроки готовности сайта из перечисленного и выпишите в поле ответа:\n* Две недели\n* Неделя\n* 5 дней\n* 3 дня")
    let book = {
        "Две недели": 1,
        "Неделя": 1.5,
        "5 дней": 2,
        "3 дня": 3,
    }
    if (siteDeadlines in book){
        alert(`${book[siteDeadlines]} * (${costAdaptability} + ${costDesign} + ${costType}) = ...`)
        return book[siteDeadlines]
    }
    else{
        alert("Вы ввели что-то неправильно")
        cost()
    }
}

function cost(){
    let costType = type()
    let costDesign = design(costType)
    let costAdaptability = adaptability(costType, costDesign)
    let costDeadlines = deadlines(costType, costDesign, costAdaptability)
    return alert(`Написание вашего сайта будет стоить: ≈ ${(costType + costDesign + costAdaptability) * costDeadlines}`)
    
}

cost()