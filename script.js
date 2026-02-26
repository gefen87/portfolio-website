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
// פונקציה חכמה לפתיחת אימייל בהתאם למכשיר
function openEmail(event) {
    event.preventDefault(); // מונע מהקישור לבצע את פעולת ברירת המחדל שלו
    
    // בדיקה האם המשתמש גולש ממכשיר נייד
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // בנייד - פותח את אפליקציית המייל המובנית בצורה חלקה
        window.location.href = "mailto:n.gefen87@gmail.com";
    } else {
        // במחשב - פותח לשונית חדשה של ג'ימייל
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=n.gefen87@gmail.com", "_blank");
    }
}