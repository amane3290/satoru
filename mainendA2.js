// This is a JavaScript file
// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyDR6kNXts1uCMUAha6n_x0PAT50exehPXE",
    authDomain: "group-i-77569.firebaseapp.com",
    projectId: "group-i-77569",
    storageBucket: "group-i-77569.appspot.com",
    messagingSenderId: "453939803332",
    appId: "1:453939803332:web:0e737c799cbecc0f5b4591"
};

// Firebase初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 学籍番号を表示し、ユーザー名を取得する処理
document.addEventListener("DOMContentLoaded", function() {
    const studentID = sessionStorage.getItem('studentID');

    // 学籍番号が保存されていれば、表示
    if (studentID) {
        document.getElementById('studentIDDisplay').textContent = '学籍番号: ' + studentID;

        // 学籍番号を使ってFirebaseからユーザー名を取得
        db.collection('student_ID').doc(studentID).get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                const userName = data.name; // ユーザー名を取得
                document.getElementById('jsi-name').value = userName; // 初期値として入力欄にセット
            } else {
                console.error("ユーザー情報が見つかりません");
            }
        }).catch((error) => {
            console.error("ユーザー名の取得中にエラーが発生しました: ", error);
        });
    } else {
        console.error("学籍番号が保存されていません");
    }
});

// メッセージを追加する関数
function add_class() {
    const userName = document.getElementById('jsi-name').value;
    const message = document.getElementById('jsi-msg').value;

    const myTimestamp = firebase.firestore.Timestamp.now(); // 現在の日時を取得

    db.collection('classa2').add({
        user: userName,
        message: message,
        timestamp: myTimestamp // タイムスタンプを保存
    })
    .then(function(){
        alert('保存しました');
        // 入力欄をクリア
        // document.getElementById('jsi-name').value = ''; 
        document.getElementById('jsi-msg').value = '';
    })
    .catch((err) => {
        alert('エラーが発生しました: ' + err);
    });
}

// メッセージを日時順に取得して表示する処理
window.onload = function() {
    db.collection('classa2').orderBy('timestamp', 'asc') // 日時で昇順にソート
    .onSnapshot(snapshot => {
        const messages = [];
        const currentUserName = document.getElementById('jsi-name').value; // 現在のユーザー名を取得

        snapshot.forEach(doc => {
            const data = doc.data();
            const timestamp = data.timestamp ? data.timestamp.toDate().toLocaleString() : ""; // タイムスタンプを日時に変換
            if (data.user && data.message) { // undefinedのフィールドを除外
                const userMessageClass = data.user === currentUserName ? 'right' : 'left'; // 自分のメッセージかどうか
                messages.push(`
                    <li class="${userMessageClass}">
                        <div class="message-bubble">
                            <span class="timestamp">${timestamp}</span>
                            <strong>${data.user}</strong>: ${data.message}
                        </div>
                    </li>
                `);
            }
        });

        // 新しいメッセージが下に来るように表示
        document.getElementById('classes').innerHTML = messages.join("");
    });
};