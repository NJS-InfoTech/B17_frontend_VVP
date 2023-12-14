function ErrorMessage(error, exception) {
    var msg = '';
    if (error.status === 0) {
        msg = 'Please check network connection';
    }
    else if (error.status == 404) {
        msg = 'Requested page not found [404]';
    }
    else if (error.status == 500) {
        msg = 'Internal server error [500]';
    }
    else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed';
    }
    else if (exception === 'timeout') {
        msg = 'Timeout error';
    }
    else if (exception === 'abort') {
        msg = 'Ajax request aborted';
    }
    else {
        msg = 'Refresh Failed. Code ' + error.status;
    }

    console.log("Popup error message: " + msg + " Status: " + error.status + " Exception: " + exception + " " + Math.floor(Math.random() * 10000));
    return msg;
}
