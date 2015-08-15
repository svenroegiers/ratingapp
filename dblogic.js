var db = require('../db');

var Comment = require('../models/comment');
var Topic = require('../models/topic');

Comment.find().exec(function (err, comments) {
    if (err) {
        return console.log('find comments error:', err);
    } else {
        
        Topic.find({}).exec(function (err, topics) {
            
            console.log(topics);
            if (err) {
                return console.log('find topics error:', err);
            }
            else {
                //res.json(topics);
                //var percentage1, percentage2, percentage3, percentage4, percentage5;
                //percentage1 = Math.round(parseFloat(topics[0].rating1 / topics[0].amount1) * 10);
                //percentage2 = Math.round(parseFloat(topics[0].rating2 / topics[0].amount2) * 10);
                //percentage3 = Math.round(parseFloat(topics[0].rating3 / topics[0].amount3) * 10);
                //percentage4 = Math.round(parseFloat(topics[0].rating4 / topics[0].amount4) * 10);
                //percentage5 = Math.round(parseFloat(topics[0].rating5 / topics[0].amount5) * 10);
                
                //if (isNaN(percentage1) && isNaN(percentage2) && isNaN(percentage3) && isNaN(percentage4) && isNaN(percentage5)) {
                //    percentage1 = 0;
                //    percentage2 = 0;
                //    percentage3 = 0;
                //    percentage4 = 0;
                //    percentage5 = 0;

                //}
                
                //console.log(percentage1);
                
                //console.log(comments[0]==null);
                //if (comments[0] == null) {
                //    res.render('detail', { user: req.user, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });

                //} else {
                //    res.render('detailCommented', { user: req.user, comments : comments, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });
                //}
                        
               
            }
            
        });


               
    }
});