
// const firebaseConfig = {
//     apiKey: "AIzaSyBVT9faGP7o_pRbAvNYiRP75_aRm2lhN7Y",
//     authDomain: "imageupload-43318.firebaseapp.com",
//     projectId: "imageupload-43318",
//     storageBucket: "imageupload-43318.appspot.com",
//     messagingSenderId: "383200511309",
//     appId: "1:383200511309:web:13b96c208118c175d66304"
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

export async function POST(req) {
    const data = await req.formData();
    if(data.get('file')) {
        console.log
    }
    return Response.json(true)
}