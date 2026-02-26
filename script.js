// פונקציית גלילה חלקה
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ניהול כפתור חזרה למעלה
const btt = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btt.style.display = "block";
    } else {
        btt.style.display = "none";
    }
};