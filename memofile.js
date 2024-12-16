// This is a JavaScript file
// // Firebase の設定
// const firebaseConfig = {
//     apiKey: "AIzaSyDR6kNXts1uCMUAha6n_x0PAT50exehPXE",
//     authDomain: "group-i-77569.firebaseapp.com",
//     projectId: "group-i-77569",
//     storageBucket: "group-i-77569.appspot.com",
//     messagingSenderId: "453939803332",
//     appId: "1:453939803332:web:0e737c799cbecc0f5b4591"
// };
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// // Firebase にデータを保存する関数
// function add_class() {
//     let userName = document.getElementById('jsi-name').value;
//     let message = document.getElementById('jsi-msg').value;

//     // Firebase にユーザー名とメッセージを保存
//     db.collection('class').add({
//         user: userName,
//         message: message
//     })
//     .then(function(){
//         alert('保存しました');
//         // 入力欄をクリア
//         document.getElementById('jsi-name').value = '';
//         document.getElementById('jsi-msg').value = '';
//     })
//     .catch((err) => {
//         alert('エラーが発生しました: ' + err);
//     });
// }

// // Firebase からデータをリアルタイムで取得して表示
// db.collection('class').onSnapshot(function(querySnapshot) {
//     let insert_data = '';

//     querySnapshot.forEach(function(doc) {
//         let data = doc.data();
//         insert_data += '<li>ユーザー名: ' + data.user + '<br>内容: ' + data.message + '</li>';
//     });