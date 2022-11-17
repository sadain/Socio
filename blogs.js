/* Please ❤ this */
const indicator = document.querySelector(".scroll-indicator")    

const scroll = () => {
  const height = document.documentElement.offsetHeight
  const mx = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const perc = document.documentElement.scrollTop * 100  / mx
  indicator.style.width = perc + "%"
}

document.addEventListener("scroll", scroll)      
