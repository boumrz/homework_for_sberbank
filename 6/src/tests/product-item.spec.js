import {ProductItem, Meat, Milk, Beer, Bread, Eggs} from '../product-item'

const list = {
    'id': '1',
    'title': 'Мясо',
    'costs': 1000.00,
    'params': {
        'weight': 100,
        'count': 2,
        'color': 'red'
    }
}

describe('Constructors test', () => {
    it('Certain id - correct id', () => {
        expect(new ProductItem(list).id).toBe('1')
    })
    it('Meat - correct', () => {
        expect(new Meat(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new Meat(list).costsPerItem}
         `)
    })
    it('Beer - correct', () => {
        expect(new Beer(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new Beer(list).costsPerItem}
         `)
    })
    it('Bread - correct', () => {
        expect(new Bread(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new Bread(list).costsPerItem}
         `)
    })
    it('Milk - correct', () => {
        expect(new Milk(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new Milk(list).costsPerItem}
         `)
    })
    it('Eggs - correct', () => {
        expect(new Eggs(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new Eggs(list).costsPerItem}
         `)
    })
})

describe('Test Methods', () => {
    it('show', () => {
        expect(new ProductItem(list).show()).toBe(`
             Название товара: ${list.title};
             Цена за весь продукт: ${list.costs};
             цвет: ${list.params.color},
             вес: ${list.params.weight},
             количество: ${list.params.count},
             цена за одну штуку: ${new ProductItem(list).costsPerItem}
         `)
    })
    it('sendToTrash', () => {
        expect(new ProductItem(list).sendToTrash()).toBe(true)
    })
    it('getFromTrash', () => {
        expect(new ProductItem(list).getFromTrash()).toBe(false)
    })
})
