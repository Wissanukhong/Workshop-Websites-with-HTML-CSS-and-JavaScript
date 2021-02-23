document.querySelectorAll('.story-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('change');
    btn.nextElementSibling.classList.toggle('change');
  });
});

// document.querySelectorAll('.story-btn') จะทำการเรียก classList แล้ว return เป็น NodeList กลับมาก จากนั้นทำการ forEach
// ภายใน method forEach สร้าง arroe function ขึ้นมา แล้วทำการ addEventListener
