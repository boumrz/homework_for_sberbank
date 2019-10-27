import axios from 'axios'

import { ProductItem, Meat, Eggs, Beer, Bread, Milk } from './product-item'

import totalWeight from './total-weight'
import style from './style.css'
import _ from 'lodash'

axios({
    method: 'get',
    url: '/api/list'
})
    .then((response) => {
        const list = response.data.map((item) => new ProductItem(item))
        return Promise.resolve(list)
    })
    .then((list) => {
        // Работа со списком параметров корзины
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        // Суммарный вес потребительской корзины
        statisticsNode.innerHTML = `<dt>Суммарный вес корзины</dt>` +
            `<dd class=${style.term}>${totalWeight(list)} кг</dd>` +
            `<dt>Стоимости каждого наименования</dt>` +
            // TODO: перенести в парсеры и сделать в виде ФП
            `<dd class=${style.term}>${list.map(({ title, costsPerItem }) => `${title} - ${costsPerItem}`).join(', ')}</dd>`
        document.body.appendChild(statisticsNode)

        return list
    })
    .then((list) => {
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        const bucket = list.map((item) => {
            switch (item.title) {
            case 'Мясо': {
                return new Meat(item)
            }
            case 'Яйца': {
                return new Eggs(item)
            }
            case 'Молоко': {
                return new Milk(item)
            }
            case 'Пиво': {
                return new Beer(item)
            }
            case 'Хлеб': {
                return new Bread(item)
            }
            default: {
                return new ProductItem(item)
            }
            }
        })

        console.log(bucket)

        statisticsNode.innerHTML += `${bucket[0].show()}<br/>`
        statisticsNode.innerHTML += `${bucket[1].show()}<br/>`
        statisticsNode.innerHTML += `${bucket[2].show()}<br/>`
        statisticsNode.innerHTML += `${bucket[3].show()}<br/>`
        statisticsNode.innerHTML += `${bucket[4].show()}<br/>`

        document.body.appendChild(statisticsNode)

        return list
    })
    .then((list) => {
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        let countTitle = 0
        let countProduct = 0
        let countWeightBucket = 0
        let countYellowColor = 0
        let countRedColor = 0
        let countWhiteColor = 0
        let color = ''

        _.each(list, (item) => {
            countTitle += 1
            countProduct += item.params.count
            countWeightBucket += item.params.count * item.params.weight

            if (item.params.color === 'red') {
                countRedColor += 1
            } else if (item.params.color === 'white') {
                countWhiteColor += 1
            } else if (item.params.color === 'yellow') {
                countYellowColor += 1
            }
        })

        const maxCountColor = Math.max(countRedColor, countWhiteColor, countYellowColor)
        // console.log(maxCountColor)
        const findCount = _.find([{name: 'countRedColor', count: countRedColor},
            {name: 'countYellowColor', count: countYellowColor},
            {name: 'countWhiteColor', count: countWhiteColor}], (item) => {
            return item.count === maxCountColor
        })

        console.log(findCount)

        if (findCount.count === countYellowColor) {
            color = 'yellow'
        } else if (findCount.count === countWhiteColor) {
            color = 'white'
        } else if (findCount.count === countRedColor) {
            color = 'red'
        }

        statisticsNode.innerHTML += `Количество наименований: ${countTitle}<br/>`
        statisticsNode.innerHTML += `Количество продуктов: ${countProduct}<br/>`
        statisticsNode.innerHTML += `Вес корзины: ${countWeightBucket}<br/>`
        statisticsNode.innerHTML += `Цвет корзины: ${color}<br/>`

        document.body.appendChild(statisticsNode)
    })
    .catch(() => {
        document.body.innerHTML = 'Сервис недоступен!'
    })
