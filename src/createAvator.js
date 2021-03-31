import avator from './three.jpeg';
import style from './index.scss'
function createAvator(){
  var img = new Image();
  img.classList.add(style.avator)
  img.src = avator;
  var root = document.getElementById('app');
  root.append(img)
}
export default createAvator