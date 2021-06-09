const itemModel = require('../models/item')
const itemArray = require('./itemArray')

module.exports = async () => {
	try {
		const items = await itemModel.insertMany(itemArray)
		console.log('Items added')
	}
	catch(err) {
		console.log(err)
	}
}