$("#sidebarToggle").click(function () {
    setTimeout(function () {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust()
    }, 50);
});
