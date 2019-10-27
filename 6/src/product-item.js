export class ProductItem {
    constructor (item) {
        ProductItem.TOTAL_ITEMS += 1

        this.id = item.id
        this.params = item.params
        this.title = item.title
        this.costs = item.costs
        this.inTrash = false

        // На самом деле это обычно реализует через getter
        this.costsPerItem = this.costs / this.params.count
    }

    sendToTrash () {
        this.inTrash = true

        return this.inTrash
    }

    getFromTrash () {
        this.inTrash = false

        return this.inTrash
    }

    getStat () {
        return `
             Название товара: ${this.title};
             Цена за весь продукт: ${this.costs};
             цвет: ${this.params.color},
             вес: ${this.params.weight},
             количество: ${this.params.count},
             цена за одну штуку: ${this.costsPerItem}
         `
    }

    show () {
        return this.getStat()
    }
}

ProductItem.TOTAL_ITEMS = 0

export class Meat extends ProductItem {
    constructor (props) {
        super(props)

        Meat.TOTAL_ITEMS += 1
    }

    show () {
        return this.getStat()
    }
}

Meat.TOTAL_ITEMS = 0

export class Eggs extends ProductItem {
    constructor (props) {
        super(props)

        Eggs.TOTAL_ITEMS += 1
    }
    show () {
        return this.getStat()
    }
}

Eggs.TOTAL_ITEMS = 0

export class Milk extends ProductItem {
    constructor (props) {
        super(props)

        Milk.TOTAL_ITEMS += 1
    }
    show () {
        return this.getStat()
    }
}

Milk.TOTAL_ITEMS = 0

export class Beer extends ProductItem {
    constructor (props) {
        super(props)

        Beer.TOTAL_ITEMS += 1
    }
    show () {
        return this.getStat()
    }
}

Beer.TOTAL_ITEMS = 0

export class Bread extends ProductItem {
    constructor (props) {
        super(props)

        Bread.TOTAL_ITEMS += 1
    }
    show () {
        return this.getStat()
    }
}

Bread.TOTAL_ITEMS = 0
