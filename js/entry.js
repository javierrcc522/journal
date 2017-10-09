function Javi(title, body) {
  this.title = title;
  this.body = body;
}

Javi.prototype.w_count = function(input) {
  var words = input.split(" ").length;
  return words;
}

Javi.prototype.v_count = function(input) {
  var vowels = input.match(/[aeiou]/gi).length;
  return vowels;
}

Javi.prototype.c_count = function(input) {
  var consonants = input.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return consonants;
}

Javi.prototype.getTeaser = function(input) {
  array = []
  var count = input.split(" ")
  for (i = 0; i <= 7; i ++)
  array.push(count[i])
  return array.join(" ")
};
