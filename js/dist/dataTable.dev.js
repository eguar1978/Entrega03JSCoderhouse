"use strict";

$(document).ready(function () {
  $('#table_id').DataTable({
    scrollY: "300px",
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    fixedColumns: true
  });
});