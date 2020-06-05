

a = [1,2,3,4,5]
b = ["zubair", "junaid", "Zohaaan"]
c = [{}, {}, {}]

var objData = {
    "name": {
        "firstName": "Mohammad",
        "secondName": "Zubair"
    },
    "age": 28,
    "hobby": ["TT", "Web series", "Internet"],
    "address": "hamirpur"
}

var data = [
    {
        "name": {
            "firstName": "Mohammad",
            "secondName": "Zubair"
        },
        "age": 33,
        "hobby": ["TT", "Web series", "Internet"],
        "address": "hamirpur"
    },
    {
        "name": {
            "firstName": "Mohammad",
            "secondName": "Junaid"
        },
        "age": 29,
        "hobby": ["TT", "Web series", "Internet"],
        "address": "hamirpur"
    }
]

for(var i = 0 ; i < data.length; i++){
    console.log( data[i].name.firstName, data[i].name.secondName )
    console.log( data[i].age )
}