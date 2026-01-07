let cookies = 0
let clickPower = 1
let cursors = 0

const cookiesSpan = document.getElementById("cookies")
const cookie = document.getElementById("cookie")

cookie.onclick = () => {
  cookies += clickPower
  update()
}

function buyUpgrade() {
  if (cookies >= 10) {
    cookies -= 10
    clickPower++
    update()
  }
}

function buyCursor() {
  if (cookies >= 50) {
    cookies -= 50
    cursors++
    update()
  }
}

setInterval(() => {
  cookies += cursors
  update()
}, 1000)

function saveGame() {
  localStorage.setItem("cookieSave", JSON.stringify({
    cookies, clickPower, cursors
  }))
}

function loadGame() {
  const data = JSON.parse(localStorage.getItem("cookieSave"))
  if (!data) return
  cookies = data.cookies
  clickPower = data.clickPower
  cursors = data.cursors
  update()
}

function update() {
  cookiesSpan.textContent = cookies
}