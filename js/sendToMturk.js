//GET url pars
console.log("--this code will send data to CrowdComputer and then to MTURK");

$(document).ready(

    function() {
    // if we are not in Mturk don't to anythin
    if (getURLParameter('hitId') == null) {
        console.log("not in MTURK");
        return;
    } 
    else {
        $("form input[type=submit]").attr("value", "Submit to CC, Turk and Requester");
    }

    //
    // Check if the worker is PREVIEWING the HIT or if they've
    // ACCEPTED the HIT
    //
    if (getURLParameter('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE") {
        // If we're previewing, disable the button and give it a
        // helpful message
        $("form").find(':input').prop("disabled", true);
        var msg = "You must ACCEPT the HIT before you can submit the results."
        $("form input[type=submit]").attr("value", msg);
        $('body').prepend("<h1 style=\"color:red\">" + msg + "</h1>")
    }

    // this should automatically find the form.
    $("form input[type=submit]").click(

        function() {
            $("form input[type=submit]").prop("disabled", true);
            $("form input[type=submit]").attr("value", "Sending data, please wait");
            var action = $("form").attr("action");
        // add hitid and assignmentID to form
        // data.
        // hit id is not of mturk class, so it's
        // not stored twice in MTURK results
        var hitId = $('<input/>').attr({
            type: 'hidden',
           // id: 'hitID',
           name: 'hitId',
           value: getURLParameter('hitId'),  
           "class": "dev-croco" 
        });
        $("form").append(hitId);
        var wokerID = $('<input/>').attr({
            type: 'hidden',
           // id: 'workerID',
           name: 'workerId',
           value: getURLParameter('workerId'),
           "class": "dev-croco"
        });
        $("form").append(wokerID);
        // assignmetID is of mturk class, so
        // it's store. This is mandatory from
        // MTurk
        var assignmentId = $('<input/>').attr({
            type: 'hidden',
           // id: 'assignmentId',
           name: 'assignmentId',
           value: getURLParameter('assignmentId'),
           "class": "croco"
        });
        $("form").append(assignmentId);

        // do an asyn post here with all the
        // form data to the original URL.
        $.post(action,$('form').serializeFormJSON());

        var csrftoken = getURLParameter("csrf");

        var task_instance_uuid = getURLParameter('uuid');
        console.log(task_instance_uuid);
        var url = decode(getURLParameter('ccl')) + '/exe/taskinstance/' + task_instance_uuid + '/finish/';
        console.log(url);
        console.log($("form").serialize());

        // trick for cross domain.        
        $.post(
            tunnel_file,
            {
                send_to_url:url,
                csrftoken:csrftoken,
                form_data:$('form').serializeFormJSON()
            },
            function(data) {
                console.log(data);
                $("form").attr("action", decode(getURLParameter("turkSubmitTo")) + "/mturk/externalSubmit");
                $("form").submit();
            }
        );
    });
});