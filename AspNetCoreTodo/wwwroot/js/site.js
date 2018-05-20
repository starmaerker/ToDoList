// Write your JavaScript code.
$(document).ready(function() {

    // Wire up all of the checkboxes to run markCompleted()
    $('.done-checkbox').on('click', function(e) {
        markCompleted(e.target);
    });

    //if ($('#urgency').text() == very) {
    //$('td #urgency').addClass('red');
    //}
    //else if ($('#urgency').text() == "normal") {
    //$('td #urgency').addClass('yellow');
    //}
    //else if ($('#urgency').text() == 2) {
    //    $('td #urgency').addClass('green');
    //}
});

function markCompleted(checkbox) {
    checkbox.disabled = true;

    var row = checkbox.closest('tr');
    $(row).addClass('done');

    var form = checkbox.closest('form');
    form.submit();
}

