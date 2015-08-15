jQuery(function ($) {
    // connect to the socket server
    var socket = io.connect();
    var $ratingForm = $('#ratingForm');
    var $rating1 = $('#rating1');
    var $submit = $('#submit');
    var $topicname = $('#topicname');
    var topics = {};
    var updatedTopics = {};
    var $percentage1 = $('#percentage1');
    var $percentage2 = $('#percentage2');
    var $percentage3 = $('#percentage3');
    var $percentage4 = $('#percentage4');
    var $percentage5 = $('#percentage5');
    var percentage1, percentage2, percentage3, percentage4, percentage5;
    
    
    function calculatePercentage() {
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

        $percentage1.text(percentage1 + "%");
        $percentage2.text(percentage2 + "%");
        $percentage3.text(percentage3 + "%");
        $percentage4.text(percentage4 + "%");
        $percentage5.text(percentage5 + "%");

        $percentage1.css({ 'width' : percentage1 + '%' });
        $percentage2.css({ 'width' : percentage2 + '%' });
        $percentage3.css({ 'width' : percentage3 + '%' });
        $percentage4.css({ 'width' : percentage4 + '%' });
        $percentage5.css({ 'width' : percentage5 + '%' });

        if (percentage1 <= 50) {
            
            $percentage1.css({'background-color' : 'IndianRed'}); 
        } else if (percentage1 >= 80) {
            
            $percentage1.css({ 'background-color' : 'MediumSeaGreen' });
        } else {
            
            $percentage1.css({ 'background-color' : 'CornflowerBlue' });
        }
        
        if (percentage2 <= 50) {
            
            $percentage2.css({ 'background-color' : 'IndianRed' });
        } else if (percentage2 >= 80) {
            
            $percentage2.css({ 'background-color' : 'MediumSeaGreen' });
        } else {
            
            $percentage2.css({ 'background-color' : 'CornflowerBlue' });
        }
        if (percentage3 <= 50) {
            
            $percentage3.css({ 'background-color' : 'IndianRed' });
        } else if (percentage3 >= 80) {
            
            $percentage3.css({ 'background-color' : 'MediumSeaGreen' });
        } else {
            
            $percentage3.css({ 'background-color' : 'CornflowerBlue' });
        }
        if (percentage4 <= 50) {
            
            $percentage4.css({ 'background-color' : 'IndianRed' });
        } else if (percentage4 >= 80) {
            
            $percentage4.css({ 'background-color' : 'MediumSeaGreen' });
        } else {
            
            $percentage4.css({ 'background-color' : 'CornflowerBlue' });
        }
        
        if (percentage5 <= 50) {
            
            $percentage5.css({ 'background-color' : 'IndianRed' });
        } else if (percentage5 >= 80) {
            
            $percentage5.css({ 'background-color' : 'MediumSeaGreen' });
        } else {
            
            $percentage5.css({ 'background-color' : 'CornflowerBlue' });
        }

    }

    function displayData(data) {
        console.log(data);
    }
    
    
    $ratingForm.submit(function (event) {
        socket.emit('new rating');
               
            
       

        });
    
    
    
    socket.on('ratings', function (data) {
        var topicname = $topicname.text();
        for (i = 0; i < data.length ; i++) {
            if (data[i].topicname == topicname) {
                //console.log(i);
                topics[0] = data[i];
            }
        
        
        }
        displayData(topics);
        calculatePercentage(topics);
    });
    
    // if we get an "info" emit from the socket server then console.log the data we recive
    socket.on('topics', function (data) {
        var topicname = $topicname.text();
        //console.log(topicname);
        //console.log(data[0].topicname);
        //console.log(topicname == $.trim(data[0].topicname));
        for (i = 0; i < data.length ; i++){
            if (data[i].topicname == topicname) {
                //console.log(i);
                topics[0] = data[i];
            }
        
        
        }

        //topics[0] = data[0];
        displayData(topics);
        calculatePercentage(topics);
    });


    

});