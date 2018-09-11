
//importanto módulos requeridos
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

//Função Add Message
// exports.addMessage = functions.https.onRequest((req, res)=>{
//     const original = req.query.text;
//     //impulsionar a nova mensagem para o realtime database usando o firebase admin sdk
//     return admin.database.ref('/messages').push({original: original}).then((snaphot)=>{
//         //redireciona com 303 - ver outro para o url do objeto enviado no realtime database
//         return res.redirect(303, snaphot.ref.toString());
//     })
// })

exports.onTaskCreate = functions.database.ref('tasks/{taskID}').onCreate((snaphot,context)=> {
    const json = snaphot.val();
    const.key = context.params.taskID;

    const log = Object.assign({createdAt: context.timestamp}, json);

    return admin.database().ref(`/logs/${key}`).set(log)
    
});
exports.onTaskUpdate = functions.database.ref('tasks/{taskID}').onUpdate((change,context)=>{
    const novoValor = change.val
    const valorAnterior = change.before.val
    const name = novoValor.name
})
exports.onTaskDelete = functions.database.ref('tasks/{taskID}').onDelete((snaphot,context)=>{
    const valorDeletado = snaphot.val
})