table = document.querySelector('#result > table');

convert = () => {
  lines = code.value.split('\n');
  table.innerHTML = '';
  for (let i = 0; i < lines.length; i++) {
    tr = document.createElement('tr');
    no = document.createElement('td');
    no.textContent = i + 1;
    line = document.createElement('td');
    pre = document.createElement('pre');
    pre.textContent = lines[i];
    line.appendChild(pre);
    tr.appendChild(no);
    tr.appendChild(line);
    table.appendChild(tr);
  }
};

convert();

code = document.getElementById('code');
code.addEventListener('input', convert);
