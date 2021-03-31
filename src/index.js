
import avator from './three.jpeg';
import createAvator from './createAvator'
//import './index.css'
import style from './index.scss'

createAvator()

var img = new Image();
img.classList.add(style.avator)
img.src = avator;
var root = document.getElementById('app');
root.append(img)
