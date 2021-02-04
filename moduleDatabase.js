const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = []

function saveProduct(product) {
    if (!product.id) product.id = sequence.id
    products.push(product)
    return product
}

function retriveProduct(id) {
    const index = products.findIndex(p => p.id == id)
    return products[index] || {}
}


function listProducts(price) {
    const filterValue = p => p.value == price
    if (price) {
        return Object.values(products.filter(filterValue))
    } else {
        return Object.values(products)
    }
}

function deleteProduct(id) {
    const index = products.findIndex(p => p.id == id)
    return products.splice(index, 1)
}

module.exports = { saveProduct, retriveProduct, listProducts, deleteProduct }