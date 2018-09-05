import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import { config } from '@/firebase/config'

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export const db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export const storage = firebaseApp.storage()