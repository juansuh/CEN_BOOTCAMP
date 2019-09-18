/* Add all the required libraries*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    listing = require('./listingSchema.js'),
    config = require('./config.js')

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  listing.find({ 'code': 'LBW' }, (err, docs) => {
    console.log(docs)
  });
};
var removeCable = function() {
  listing.remove({'code': 'CABL'})
};
var updatePhelpsMemorial = function() {
  listing.findOneAndUpdate({ 'code': 'PHL' }, { 'address': "1953 Museum Rd, Gainesville, FL 32603"}, (err, doc) => {
    if(err) console.log(err);
  });
};
var retrieveAllListings = function() {
  listing.find({}, (err, docs) => {
    console.log(docs)
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();