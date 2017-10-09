var Journal = require('./../js/entry.js').journalModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {

    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    var crush = new Javi(title,body);
    var w_count = crush.w_count(body);
    var v_count = crush.v_count(body);
    var c_count = crush.c_count(body);
    var getTeaser = crush.getTeaser(body);

    $("#output").append("<li><h1>" + title + "</h1></li>");
    $("#output").append("<li><h3>" + "Teaser:" + getTeaser + "</h3></li>");
    $("#output").append("<li><h3>" + body + "</h3></li>");
    $("#output").append("<li><h3>" + "There are " + w_count + " words in this entry." + "</h3></li>");
    $("#output").append("<li><h3>" + "There are " + v_count + " vowels in this entry." + "</h3></li>");
    $("#output").append("<li><h3>" + "There are " + c_count + " consonants in this entry." + "</h3></li>");
  });
});
