export default class Filter {
    constructor() {

    }

    getParams(){
        const staticParams = {
            kind: [
                "Открытая",
                "Закрытая",
                "Уличная"
            ],
            type: [
                "П-образная",
                "Г-образная",
                "Прямая",
                "Трехмаршевая",
                "Винтовая",
                "Модульная"
            ],
            carcas: [
                "На монокосоуре",
                "На косоурах",
                "На тетиве"
            ],
            stages: [
                "Металл",
                "Дерево"
            ],
            material: [
                "Из металла",
                "Из дерева",
                "Из стекла",
                "Троссовые"
            ]
        }

        this.params = staticParams;
    }

    getResults(){
        const staticResults = [
            {
                "id": 1,    
                "title": "Винтовая лестница 'Лиссабон'",
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Металл",
                "material": "Металлические",

            },
            {
                "id": 2,
                "title": "Винтовая лестница 'Авиньон'",
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 3,
                "title": "Винтовая лестница 'Утрехт'",
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "art": 159887,
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 4,
                "title": "Винтовая лестница 'Осло'",
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "П-образная",
                "carcas": "На косоурах",
                "stages": "Дерево",
                "material": "Деревянные",

            },
            {
                "id": 5,
                "title": '"Винтовая лестница "Осло"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Закрытая",
                "type": "Г-образная",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 6,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Уличная",
                "type": "Винтовая",
                "carcas": "На тетиве",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 7,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 8,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 9,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 10,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На тетиве",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 11,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            },
            {
                "id": 12,
                "title": 'Винтовая лестница "Авиньон"',
                "src": '"./img/ledders/ledder-1.jpg" alt="Лиссабон"',
                "art": 159887,
                "price": "По запросу",
                "kind": "Открытая",
                "type": "Винтовая",
                "carcas": "На монокосоуре",
                "stages": "Дерево",
                "material": "Металлические",

            }   
        ]

        this.results = staticResults;
    }

    

}