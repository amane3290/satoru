// This is a JavaScript file
  // ページが読み込まれたときに学籍番号を表示
  document.addEventListener("DOMContentLoaded", function() {
    const studentID = sessionStorage.getItem('studentID');
    
    // 学籍番号が保存されていれば、表示
    if (studentID) {
        document.getElementById('studentIDDisplay').textContent = studentID;
    } else {
        console.error("学籍番号が保存されていません");
    }
});