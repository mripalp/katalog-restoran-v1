import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../components/app-bar.js'
import '../components/app-hero.js'
import '../components/resto-list.js'

const hamburgerButtonElement = document.querySelector('#menu')
const drawerElement = document.querySelector('#drawer')
const mainElement = document.querySelector('main')

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.add('menu')
  drawerElement.classList.toggle('open')
  event.stopPropagation()
})

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open')
  event.stopPropagation()
})
