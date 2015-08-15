var mongoose = require('mongoose');

module.exports = mongoose.model('Topic', {
    topicname : String,
    subject1: String, 
    rating1  : Number,
    amount1 : Number,
    subject2: String, 
    rating2  : Number,
    amount2 : Number,
    subject3: String, 
    rating3  : Number,
    amount3 : Number,
    subject4: String, 
    rating4  : Number,
    amount4 : Number,
    subject5: String, 
    rating5  : Number,
    amount5 : Number,
    created  : Date
});
