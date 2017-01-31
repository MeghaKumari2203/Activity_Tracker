'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
   user: {                         // common across
    type: Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  actName: String,
  actDesc:String,
  activityDate:Date,
  actStatus:String,
  actTime:String,
  createdOn:{
    type:Date,
    default:Date.now
  },
  deleted:{type:Boolean,default:1}

});

ActivitySchema.pre('find', function (next) {
  this.populate('user');
  next();
});
ActivitySchema.pre('findOne', function (next) {
  this.populate('user');
  next();
});
module.exports = mongoose.model('Activity', ActivitySchema);
