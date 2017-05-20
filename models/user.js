'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {type: String, unique: true},
    last_seen: Date,
    created_at: Date,
    updated_at: Date
});


userSchema.pre('save', function (next) {

    var currentDate = new Date();

    if (!this.created_at) {
        this.created_at = currentDate;
    }

    this.updated_at = currentDate;

    next();
});


module.exports = mongoose.model('User', userSchema);