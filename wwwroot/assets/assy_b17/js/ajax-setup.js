var claim_global_lock = false;

$.ajaxSetup({
    statusCode: {
        401: async function () {
            if (!claim_global_lock) {
                claim_global_lock = true;
                console.debug("Got 401. Attempting re-auth...")
                const res = await CheckClaim();
                console.debug("Result of re-auth " + res);
            }
        }
    }
});

$(document).ready(function () {
    CheckClaim();
    setInterval(function () {
        CheckClaim();
    }, 300000);
});

function CheckClaim() {
    return $.ajax({
        type: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        url: 'Default.aspx/ClaimExpiration',
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.debug("Result of claim check " + result.d);
            if (result.d < 0 || result.d === undefined) {
                window.open('/assy-b17/SignInTest.aspx')
                setInterval(function () { CheckClaim2() }, 1000)
            } else if (result.d < 301) {
                window.open('/assy-b17/SignInTest.aspx')
            } else {
                claim_global_lock = false;
            }
        },
        error: function (error, exception) {
            SweetAlertMessagePopup(ErrorMessage(error, exception + " in CheckClaim"), "error");
        },
        failure: function (r) {
            SweetAlertMessagePopup(r.responseText, "error");
        }
    });
}

function CheckClaim2() {
    $.ajax({
        type: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        url: 'Default.aspx/ClaimExpiration',
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.debug("Result of claim check " + result.d);
            if (result.d > 0) {
                window.location = window.location.href;
            }
        },
        error: function (error, exception) {
            console.debug("Unexpected error in CheckClaim2() " + error);
        },
        failure: function (r) {
            SweetAlertMessagePopup(r.responseText, "error");
        }
    });
}
