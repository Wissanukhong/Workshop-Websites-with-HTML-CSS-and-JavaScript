# Personal Portfolio

- [Personal Portfolio](#personal-portfolio)
  - [navbar](#navbar)

## navbar

- สร้างโคร้าง html ขึ้นมาก่อนตามตัวอย่าง Code ต่อไปนี้

```html
<!-- navbar -->
<nav class="navbar">
  <div class="logo">
    <a href="#"> <span>C</span>code<span>A</span>nd<span>C</span>reate </a>
  </div>

  <div class="nav-list">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Pricing</a>
    <a href="#" class="nav-link">Blog</a>
    <a href="#" class="nav-link">Contact</a>
  </div>
</nav>

<!-- menu hamberger -->
<div class="menu">
  <div class="line line-1"></div>
  <div class="line line-2"></div>
  <div class="line line-3"></div>
</div>
```

- จากนั้นให้เขียน css เพื่อตกแต่ง UI ตามตัวอย่าง Code ต่อไปนี้

```css
/* Navbar */
.navbar {
  width: 100%;
  height: 8rem;
  background-color: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 3rem;
  transition: height 0.5s;
}

.navbar.change {
  height: 100vh;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 4rem;
}

.logo a {
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  color: #eee;
  letter-spacing: 0.1rem;
}

.logo span {
  font-family: 'Oswald', sans-serif;
  font-size: 3.5rem;
  font-weight: bold;
  color: red;
}

.nav-list {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: all 0.2s;
}

.change .nav-list {
  opacity: 1;
  transition: all 0.7s 0.5s;
}

.nav-link {
  font-family: 'Oswald', sans-serif;
  font-size: 4rem;
  letter-spacing: 0.3rem;
  color: #fff;
  margin: 2rem 0;
  transition: color 0.4s;
}

.nav-link:hover {
  color: red;
}

/* menu hamberker */
.menu {
  width: 4rem;
  height: 4rem;
  position: fixed;
  top: 2rem;
  right: 4rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
}

/* customize humberger lline */
.line {
  width: 100%;
  height: 0.2rem;
  background-color: #eee;
}

.line-1 {
  width: 50%;
}

.line-3 {
  width: 50%;
  margin-left: auto;
}
```
