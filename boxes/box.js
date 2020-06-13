var data = [
    {
        itemName: 'Banana',
        quantityLeft: 12,
        imageName: 'banana.jpg',
        price: 38
    },
    {
        itemName: 'Apple',
        quantityLeft: 4,
        imageName: 'apple.jpg',
        price: 100
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Apple',
        quantityLeft: 4,
        imageName: 'apple.jpg',
        price: 100
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Apple',
        quantityLeft: 4,
        imageName: 'apple.jpg',
        price: 100
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Banana',
        quantityLeft: 12,
        imageName: 'banana.jpg',
        price: 38
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Apple',
        quantityLeft: 4,
        imageName: 'apple.jpg',
        price: 100
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Banana',
        quantityLeft: 12,
        imageName: 'banana.jpg',
        price: 38
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Guava',
        quantityLeft: 10,
        imageName: 'guava.jpg',
        price: 40
    },
    {
        itemName: 'Banana',
        quantityLeft: 12,
        imageName: 'banana.jpg',
        price: 38
    },
]




function loadBoxes(){
    var finalHtml = '';
    for(var i = 0 ; i < data.length ; i++){
        var template = boxTemplate(data[i]);
        finalHtml = finalHtml + template
    }
    var rootElement = document.getElementById('root')
    rootElement.innerHTML = finalHtml;
}


function boxTemplate(obj){
    var template = `
        <div class="box">
            <div class="left-div">
                <img src="${obj.imageName}"/>
            </div>
            <div class="right-div">
                <div class="title">
                    ${obj.itemName}
                </div>
                <div>
                    Price: Rs ${obj.price}
                </div>
                <div style="margin-top: 10px;">
                    Quantity: ${obj.quantityLeft}
                </div>
                <div style="margin-top: 20px;">
                    <Button class="btn" onclick="addItem()">Add</Button>
                </div>
            </div>
        </div>
    `
        return template;
}


