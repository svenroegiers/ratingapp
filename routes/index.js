var express = require('express');
var router = express.Router();
var db = require('../db');


var Comment = require('../models/comment');
var Topic = require('../models/topic');

var date = new Date();
var now = date.toGMTString();

var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
};

module.exports = function (passport) {
    /* Get login page */
    router.get('/', function (req, res) {
        res.render('index', { message: req.flash('message') });
    });
    
    /* Handle login post */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true
    }));
    
    /* Get registration page */
    router.get('/signup', function (req, res) {
        res.render('register', { message: req.flash('message') });
    });
    
    /* Handle registration post */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/signup',
        failureFlash : true
    }));
    
    
    
    /*get deatil page*/
    router.get('/detail', isAuthenticated, function (req, res) {
        var topicnameparam = req.query.id;
        console.log(topicnameparam);
        console.log(topicnameparam === "WCD")
        console.log(req.user.username);
        
        if (req.user.username == "admin") {

            Comment.find({ topic: topicnameparam }).exec(function (err, comments) {
                if (err) {
                    return console.log('find comments error:', err);
                } else {
                    
                    Topic.find({ topicname: topicnameparam }).exec(function (err, topics) {
                        
                        console.log(topics);
                        if (err) {
                            return console.log('find topics error:', err);
                        }
                        else {
                            //res.json(topics);
                            var percentage1, percentage2, percentage3, percentage4, percentage5;
                            percentage1 = Math.round(parseFloat(topics[0].rating1 / topics[0].amount1) * 10);
                            percentage2 = Math.round(parseFloat(topics[0].rating2 / topics[0].amount2) * 10);
                            percentage3 = Math.round(parseFloat(topics[0].rating3 / topics[0].amount3) * 10);
                            percentage4 = Math.round(parseFloat(topics[0].rating4 / topics[0].amount4) * 10);
                            percentage5 = Math.round(parseFloat(topics[0].rating5 / topics[0].amount5) * 10);
                            
                            if (isNaN(percentage1) && isNaN(percentage2) && isNaN(percentage3) && isNaN(percentage4) && isNaN(percentage5)) {
                                percentage1 = 0;
                                percentage2 = 0;
                                percentage3 = 0;
                                percentage4 = 0;
                                percentage5 = 0;

                            }
                            
                            console.log(percentage1);
                            
                            //console.log(comments[0]==null);
                            if (comments[0] == null) {
                                res.render('detail', { user: req.user, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });

                            } else {
                                res.render('detailCommented', { user: req.user, comments : comments, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });
                            }
                        
               
                        }
            
                    });


               
                }
            });

        } else {
            
            Comment.find({ topic: topicnameparam, username: req.user.username }).exec(function (err, comments) {
                if (err) {
                    return console.log('find comments error:', err);
                } else {
                    
                    Topic.find({ topicname: topicnameparam }).exec(function (err, topics) {
                        
                        console.log(topics);
                        if (err) {
                            return console.log('find topics error:', err);
                        }
                        else {
                            //res.json(topics);
                            var percentage1, percentage2, percentage3, percentage4, percentage5;
                            percentage1 = Math.round(parseFloat(topics[0].rating1 / topics[0].amount1) * 10);
                            percentage2 = Math.round(parseFloat(topics[0].rating2 / topics[0].amount2) * 10);
                            percentage3 = Math.round(parseFloat(topics[0].rating3 / topics[0].amount3) * 10);
                            percentage4 = Math.round(parseFloat(topics[0].rating4 / topics[0].amount4) * 10);
                            percentage5 = Math.round(parseFloat(topics[0].rating5 / topics[0].amount5) * 10);
                            
                            if (isNaN(percentage1) && isNaN(percentage2) && isNaN(percentage3) && isNaN(percentage4) && isNaN(percentage5)) {
                                percentage1 = 0;
                                percentage2 = 0;
                                percentage3 = 0;
                                percentage4 = 0;
                                percentage5 = 0;

                            }
                            
                            console.log(percentage1);
                            
                            //console.log(comments[0]==null);
                            if (comments[0] == null) {
                                res.render('detail', { user: req.user, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });

                            } else {
                                res.render('detailCommented', { user: req.user, comments : comments, topics: topics, percentage1 : percentage1, percentage2 : percentage2, percentage3 : percentage3, percentage4 : percentage4, percentage5 : percentage5 });
                            }
                        
               
                        }
            
                    });


               
                }
            });
        }
        
    });
    
    ///* Handle delete*/
    //router.get('/home', isAuthenticated, function (req, res) {
    //    var topicnameparam = req.query.id;
    //    Topic.find().exec(function (err, topics) {
    //        if (err) {
    //            return console.log('find topics error:', err);
    //        }
    //        else {
    //            //res.json(topics);
                
    //            Topic.remove({ topicname: topicnameparam }).exec(function (err, topics) {
    //                if (err) {
    //                    return console.log('find topics error:', err);
    //                } else {
                        
                        
    //                    console.log(topics);

    //                    Comment.remove({ topic: topicnameparam }).exec(function (err, comments) {
    //                        if (err) {
    //                            return console.log('find topics error:', err);
    //                        } else {

    //                            console.log(topics);
    //                            res.render('home', { user: req.user, topics: topics });
    //                        }
    //                    });
                        
               
    //                }
    //            });
                
                
                
                
               
    //        }
            
    //    });
    //});
    

    /* Get home page */
    router.get('/home', isAuthenticated, function (req, res) {
        var topicnameparam = req.query.id;
        if (topicnameparam == null) {
            Topic.find().exec(function (err, topics) {
                if (err) {
                    return console.log('find topics error:', err);
                }
                else {
                    //res.json(topics);
                    
                    console.log(topics);
                    res.render('home', { user: req.user, topics: topics });
               
                }
            
            });
        } else {
            Topic.find().exec(function (err, topics) {
                if (err) {
                    return console.log('find topics error:', err);
                }
                else {
                    //res.json(topics);
                    
                    Topic.remove({ topicname: topicnameparam }).exec(function (err, topics) {
                        if (err) {
                            return console.log('find topics error:', err);
                        } else {
                            
                            
                            console.log(topics);
                            
                            Comment.remove({ topic: topicnameparam }).exec(function (err, comments) {
                                if (err) {
                                    return console.log('find topics error:', err);
                                } else {
                                    
                                    console.log(topics);
                                    Topic.find().exec(function (err, topics) {
                                        if (err) {
                                            return console.log('find topics error:', err);
                                        }
                                        else {
                                            //res.json(topics);
                                            
                                            console.log(topics);
                                            res.render('home', { user: req.user, topics: topics });
               
                                        }
            
                                    });

                                    
                                }
                            });
                        
               
                        }
                    });
                
                
                
                
               
                }
            
            });
        }
        
        //res.render('home', { user: req.user});
    });
    
    
    /* Handle create topic */
    router.get('/createtopic', isAuthenticated, function (req, res) {
        res.render('createtopic', { user: req.user });
    });
    
    /* Handle post rating/comment*/
    router.post('/rating/:topicname', isAuthenticated, function (req, res) {
        console.log(req.param("topicname"));
        topicnameparam = req.param("topicname");
        
        Topic.find({ topicname: topicnameparam }).exec(function (err, topics) {
            
            console.log(topics);
            
            console.log(topics[0].topicname);
            console.log(topics[0].subject1);
            if (err) {
                return console.log('find topics error:', err);
            }
            else {
                //res.json(topics);
                if (req.body.rating1 == "") {
                    console.log("not sended");
                } else {
                    new Comment({
                        username : req.user.username,
                        topic: topics[0].topicname,
                        subject1: topics[0].subject1, 
                        content1: req.body.comment1,
                        subject2: topics[0].subject2, 
                        content2: req.body.comment2,
                        subject3: topics[0].subject3, 
                        content3: req.body.comment3,
                        subject4: topics[0].subject4, 
                        content4: req.body.comment4,
                        subject5: topics[0].subject5, 
                        content5: req.body.comment5,
                        created  : Date.now(),
                    }).save(function (err) {
                        if (!err) {
                            console.log("You've added a comment!");
                            //res.redirect('/home');
                        } else {
                            console.log("Error: " + err);
                        }
                    });

                    Topic.findOneAndUpdate({
                        "topicname" : topics[0].topicname,
                        
                    }, {
                        "$inc" : {
                            "rating1" : req.body.rating1,
                            "rating2" : req.body.rating2,
                            "rating3" : req.body.rating3,
                            "rating4" : req.body.rating4,
                            "rating5" : req.body.rating5,
                            "amount1" : 1,
                            "amount2" : 1,
                            "amount3" : 1,
                            "amount4" : 1,
                            "amount5" : 1
                        }
                    }, {
                        "new" : true,
                        "upsert" : false
                    }, function (err, topic) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(topic);
                            res.redirect('/home');
                            
                        }
                    });
                }
                        
               
            }

        });  
    });
    
   
    /* Handle create topic post */
    
    router.post('/createtopic', function (req, res) {
        if (req.body.topicname == "") {
            console.log("empty topic");
        } else {
            new Topic({
                topicname: req.body.topicname,
                subject1: req.body.subject1,
                rating1: 0,
                amount1: 0,
                subject2: req.body.subject2,
                rating2: 0,
                amount2: 0,
                subject3: req.body.subject3,
                rating3: 0,
                amount3: 0,
                subject4: req.body.subject4,
                rating4: 0,
                amount4: 0,
                subject5: req.body.subject5,
                rating5: 0,
                amount5: 0,
                created: Date.now(),
            }).save(function (err) {
                if (!err) {
                    console.log("You've added a topic!");
                    res.redirect('/home');
                } else {
                    console.log("Error: " + err);
                }
            });
        }
    });
              
          


   
    
    /* Handle logout */
    router.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    
    return router;
}





