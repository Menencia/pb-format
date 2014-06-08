var value = document.getElementById('content').value;
value = strip_tags(value, '<i>');

var out = "";
var lines = explode("\n", value);
for (var i in lines) {
  // omit first lines
  if (i < 4) continue;

  if (substr_count(lines[i], '*') == 3) {
    out += '<p style="text-align: center;">* * *</p>';
  } else if (lines[i] == '') {
    out += '&nbsp;';
  } else {
    out += lines[i];
  }

  out += "\n\n";
}

document.getElementById('content').value = out;