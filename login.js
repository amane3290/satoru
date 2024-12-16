// Firebaseの設定
const firebaseConfig = {
    apiKey: "AIzaSyDR6kNXts1uCMUAha6n_x0PAT50exehPXE",
    authDomain: "group-i-77569.firebaseapp.com",
    projectId: "group-i-77569",
    storageBucket: "group-i-77569.appspot.com",
    messagingSenderId: "453939803332",
    appId: "1:453939803332:web:0e737c799cbecc0f5b4591"
};
// Firebaseの初期化
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ログイン処理
async function login() {
    try {
        // ユーザーが入力した値を取得
        const enteredStudentID = document.getElementById('studentid').value.trim();
        const enteredPassword = document.getElementById('loginpassword').value;

        if (!enteredStudentID || !enteredPassword) {
            alert("学籍番号またはパスワードを入力してください。");
            return;
        }

        // Firestoreの"student_ID"コレクションから学籍番号を照合
        const docRef = db.collection('student_ID').doc(enteredStudentID);
        const docSnap = await docRef.get();

        // ドキュメントが存在するか確認
        if (docSnap.exists) {
            const data = docSnap.data();
            const storedPassword = data.pass;

            // パスワードが一致するか確認
            if (enteredPassword === storedPassword) {
                alert("ログイン成功！");
                // 学籍番号をセッションストレージに保存
                sessionStorage.setItem('studentID', enteredStudentID);
                // ログイン成功後に遷移したいページにリダイレクトする
                window.location.href = "./class.html";
            } else {
                alert("パスワードが間違っています。");
            }
        } else {
            alert("学籍番号が存在しません。");
        }
    } catch (error) {
        console.error("エラーが発生しました:", error);
        alert("ログイン処理中にエラーが発生しました。");
    }
}