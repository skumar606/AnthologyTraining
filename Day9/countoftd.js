//Count of td
$(document).ready(function () {
    alert($('td').length);
});

//change background color
$(document).ready(function () {
    $('tr').css('background-color', 'red');
});

// //contents of the table
$(document).ready(function () {
    alert($('table').html());
});

// //Alerts the HTML content of each table row
// $(document).ready(function () {
//     $('table tr').each(function () {
//         alert($(this).html());
//     });
// });

//Select and changes the background colour of all the div, span and anchor elements
//Exercise 
//Tip - $('div, span, a')

$(document).ready(function () {
    $('div,span,a').css('background-color', 'magenta');
});