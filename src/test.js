import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('GsIcdpI1WuNQ1SuvdNNV')
  .collection('cartItem')
  .doc('cACSOCX0LzmfadnIqjS8');

firestore.doc('/users/GsIcdpI1WuNQ1SuvdNNV/cartItem/cACSOCX0LzmfadnIqjS8');
firestore.collection('/users/GsIcdpI1WuNQ1SuvdNNV/cartItem');
