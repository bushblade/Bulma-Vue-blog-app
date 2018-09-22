export const commands = [{
  cmd: 'bold',
  icon: 'fa-bold',
  desc: 'Toggles bold on/off for the selection'
}, {
  cmd: 'italic',
  icon: 'fa-italic',
  desc: 'Toggles italics on/off for the selection'
}, {
  cmd: 'createLink',
  val: 'http://www.bushbladeprojects.co.uk/',
  icon: 'fa-link',
  desc: 'Creates an anchor link from the selection'
}, {
  cmd: 'unlink',
  icon: 'fa-unlink',
  desc: 'Removes the anchor tag from a selected anchor link'
}, {
  cmd: 'fontSize',
  val: '1-7',
  icon: 'fa-text-height',
  desc: 'Changes the font size for the selection'
}, {
  cmd: 'formatBlock',
  val: '<blockquote>',
  icon: 'fa-quote-right',
  desc: 'Adds an HTML block-style tag around the line containing the current selection'
}, {
  cmd: 'insertHorizontalRule',
  icon: 'fa-ruler-horizontal',
  desc: 'Inserts a horizontal rule at the insertion point'
}, {
  cmd: 'insertImage',
  val: 'http://dummyimage.com/160x90',
  icon: 'fa-image',
  desc: 'Inserts an image at the insertion point'
}, {
  cmd: 'insertUnorderedList',
  icon: 'fa-list-ul',
  desc: 'Creates a bulleted unordered list for the selection or at the insertion point'
}, {
  cmd: 'insertParagraph',
  icon: 'fa-paragraph',
  desc: 'Inserts a paragraph around the selection or the current line'
}, {
  cmd: 'justifyCenter',
  icon: 'fa-align-justify',
  desc: 'Centers the selection or insertion point'
}, {
  cmd: 'justifyLeft',
  icon: 'fa-align-left',
  desc: 'Justifies the selection or insertion point to the left'
}, {
  cmd: 'justifyRight',
  icon: 'fa-align-right',
  desc: 'Right-justifies the selection or the insertion point'
}, {
  cmd: 'removeFormat',
  icon: 'fa-eraser',
  desc: 'Removes all formatting from the current selection'
}, {
  cmd: 'strikeThrough',
  icon: 'fa-strikethrough',
  desc: 'Toggles strikethrough on/off for the selection'
}, {
  cmd: 'underline',
  icon: 'fa-underline',
  desc: 'Toggles underline on/off for the selection'
}]