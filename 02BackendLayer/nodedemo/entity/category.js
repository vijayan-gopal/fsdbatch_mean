const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const CategorySchema = new Schema({
  categoryName: {type: String, required: [true, 'Why no category?']},
  createdDt: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports  = Category