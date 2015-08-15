var mongoose = require('mongoose');

module.exports = mongoose.model('Comment', {
    username : String,
    topic: String,
    subject1: String, 
    content1: String,
    subject2: String, 
    content2: String,
    subject3: String, 
    content3: String,
    subject4: String, 
    content4: String,
    subject5: String, 
    content5: String,
    created  : Date
});
