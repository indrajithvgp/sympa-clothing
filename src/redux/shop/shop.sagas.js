import {takeLatest, all,call, put} from 'redux-saga/effects'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync(){

    yield console.log("I am fired")

    try{
        const collectionRef = firestore.collection('collections')
        const snapShot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }

} 

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}