window.onload = function(){
    // firebase-app-compat.jsの読み込み
    const firebase_app_script = document.createElement('script');
    firebase_app_script.src = "https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js";
    document.body.appendChild(firebase_app_script);
    // firebase-firestore-compat.jsの読み込み
    const firebase_firestore_script = document.createElement('script');
    firebase_firestore_script.src = "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore-compat.js";
    document.body.appendChild(firebase_firestore_script);
    // main.jsの読み込み
    const main_script = document.createElement('script');
    main_script.src = "main.js";
    document.body.appendChild(main_script);
}