(function (){
  document.querySelectorAll(`table`).forEach(function(table) {
    table.addEventListener(`mouseenter`, function(e) {
      e.target.style.cursor = `pointer`;
    }, false);

    table.addEventListener(`click`, function(e) {
      let lines = [];
      this.querySelectorAll(`tr`).forEach(function(tr) {
        let line = [];
        tr.querySelectorAll(`th, td`).forEach(function(td) {
          let text = td.textContent || td.innerText;
          text = `"` + text.replace(/"/g, `""`) + `"`;
          line.push(text);
        });
        lines.push(line.join(`,`));
      });

      let dl = document.createElement(`a`);
      dl.href = `data:text/csv;charset=utf-8,%EF%BB%BF` + encodeURIComponent(lines.join(`\r\n`));
      dl.setAttribute(`download`, `table.csv`);
      document.body.appendChild(dl);
      dl.click();
      document.body.removeChild(dl);
    });
  });
})();
