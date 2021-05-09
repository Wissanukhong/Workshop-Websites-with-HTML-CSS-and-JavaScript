# Creatvie Design

- [Creatvie Design](#creatvie-design)
  - [ขั้นตอนการลงมือทำ](#ขั้นตอนการลงมือทำ)
  - [nav-bar](#nav-bar)
    - [html](#html)
    - [CSS](#css)
    - [การจัดกลางของ Absolute](#การจัดกลางของ-absolute)
    - [การจัดย่อหน้าให้กับ paragraph = text-indent](#การจัดย่อหน้าให้กับ-paragraph--text-indent)
    - [JavaScript](#javascript)

## ขั้นตอนการลงมือทำ

1. เริ่มจากการเขียน Navbar

## nav-bar

### html

```html
<section class="section-1">
  <nav class="navbar">
    <a href="#" class="navbar-link">Design</a>
    <a href="#" class="navbar-link">Customers</a>
    <a href="#" class="navbar-link">Team</a>
    <a href="#" class="navbar-link">Contact</a>
  </nav>
  <div class="floating-bg"></div>
  <h1 class="section-1-heading">Creative Design</h1>
  <div class="logo">
    <i class="fas fa-bezier-curve"></i>
  </div>
</section>
```

### CSS

```css
.floating-bg {
  width: 150vw;
  height: 150vw;
  background-color: rgba(50, 231, 255, 0.8);
  position: absolute; /* ตำแหน่งที่อิสระ แต่จะอ้างอิงตำแหน่งจาก Element ก่อนหน้า */
  top: -125vw; /* ตำแหน่งที่เราต้องการให้แสดง */
  left: calc(50% - 75vw); /* สูตรในการจัดกลางของตำแหน่ง absolute */
  border-radius: 45%; /* ให้ขอบมน 45% */
  animation: rotate 30s infinite; /* ให้เคลื่อนไหวทุกๆ 30 วินาที ไปตลอด */
}

.floating-bg::before {
  position: absolute; /* ตำแหน่งที่อิสระ แต่จะอ้างอิงตำแหน่งจาก Element ก่อนหน้า */
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgb(50, 231, 255, 0.8);
  top: 0;
  left: 0;
  border-radius: 40%; /* ให้ขอบมน 45% */
  animation: rotate 30s infinite; /* ให้เคลื่อนไหวทุกๆ 30 วินาที ไปตลอด */
}

/* Frames ที่เราต้องการให้มีการ Animation  */
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

.navbar {
  position: relative; /* ตำแหน่งที่แท้จริง ที่แสดงต่อจาก Element ก่อนหน้า */
  z-index: 20;
  top: 4rem;
  display: flex;
  justify-content: space-evenly; /* จัดตำแหน่ง ในแนวนอนให้มีระยะห่างเท่ากัน */
}

.navbar-link {
  font-size: 2.2rem;
  font-weight: 700; /* ความหนาของตัวอักษร */
  color: #fff;
  letter-spacing: 0.2rem;
  width: 1.5rem; /* กำหนดความกว้างให้กับ Element นั้น  */
  word-wrap: break-word; /* ถ้าหาก Text มีความกว้างมากกว่า 1.5rem จะทำการเรียงตัวในแนวตั้ง */
  text-align: center;
  transition: all 0.5s; /* กำหนดให้ทุกอย่างใน Element delay 0.5s */
}

.navbar-link:hover {
  width: 15rem;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 2.5s; /* กำหนดให้ทุกอย่างใน Element delay 0.5s */
}
```

### การจัดกลางของ Absolute

จะต้อง `transform: translateX(-เท่ากับจำนวน left);`

```css
position: absolute; /* ตำแหน่งที่อิสระ แต่จะอ้างอิงตำแหน่งจาก Element ก่อนหน้า */
top: 18vw;
left: 50%;
transform: translateX(-50%);
```

### การจัดย่อหน้าให้กับ paragraph = text-indent

```css
.story-paragraph {
  font-size: 1.8rem;
  color: #fff;
  text-align: justify;
  letter-spacing: 0.1rem;
  text-indent: 2rem;
}
```

### JavaScript

- toggle คือการเมื่อไหร่ก็ตามที่ click เราให้ element ทที่เราต้องการเปลี่ยนแปลงค่าตามที่เราต้องการ

```js

```
