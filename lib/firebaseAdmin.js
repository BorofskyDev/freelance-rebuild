// lib/firebaseAdmin.js
import * as admin from 'firebase-admin'

if (!admin.apps.length) {
  const decodedServiceAccount = Buffer.from(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
    'base64'
  ).toString('utf8')

  const serviceAccount = JSON.parse(decodedServiceAccount)

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
}

const dbAdmin = admin.firestore()

export { admin, dbAdmin }
