import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js'
hljs.highlightCode = function () {
  //自定义highlightCode方法，将只执行一次的逻辑去掉
  const blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, hljs.highlightBlock);
};
const highlightCode = () => {
  hljs.highlightCode()
}
export { highlightCode }
