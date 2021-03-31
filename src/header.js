function Header(){
  var dom = document.getElementById('app');
  
  var div = document.createElement('div');
  div.innerText = 'Header'
  dom.append(div)
}
export default Header;