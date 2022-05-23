const list = document.querySelectorAll('.highlight'); // highlightクラスを全て取得
for (i = 0; i <= list.length - 1; i++) {
  const fn = list[i].getAttribute('fn'); // ファイル名
  const code = list[i].firstElementChild.firstElementChild;
  if (fn) {
    const div = document.createElement('div');
    div.textContent = fn;
    div.classList.add('code-name');
    code.parentNode.insertBefore(div, code);
  }
}
