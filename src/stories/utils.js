function createTemplate(txt) {
  let t = `<div class="p-8 bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark">`;
  t += txt
  return t + '</div>';
}

export { createTemplate }