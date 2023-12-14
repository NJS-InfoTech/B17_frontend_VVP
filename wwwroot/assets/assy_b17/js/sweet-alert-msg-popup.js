function SweetAlertMessagePopup(title, icon) {
    if (title == "Requested JSON parse failed") {
        SweetAlertToastPopup(title, icon);
    }
    else {
        Swal.fire({
            title: title,
            icon: icon,
            allowOutsideClick: false,
            allowEscapeKey: false,
        })
    }
}
function SweetAlertToastPopup(title, icon) {
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    if (hours == 0) {
        hours = 12;
    }

    var date_time = yyyy + "-" + mm + "-" + dd + " " + hours + ":" + minutes + " " + am_pm;
    title = title + "&emsp;" + date_time;

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom',
        background: '#dc3545',
        padding: '0',
        showConfirmButton: false,
        timer: 10000,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        title: "<label class='m-0 text-white'> &nbsp;" + title + "</label>"
    })
}
function SweetAlertSuccess(title, icon) {
    Swal.fire({
        title: title,
        icon: icon,
        showConfirmButton: false,
        timer: 1500
    })
}
