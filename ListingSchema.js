/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

const config = require('./config.js');

mongoose.connect(config.db.uri, { useNewUrlParser: true });

const listingSchema = new Schema({
  code: {type: String, required: true, unique: true},
  name: { type: String, required: true, unique: true },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  address: String
});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
listingSchema.pre('save', function(next) {
  date = new Date();

  this.updated_at = date;

  if (!this.created_at)
    this.created_at = date;

  next();
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
