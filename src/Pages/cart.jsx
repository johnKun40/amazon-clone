import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import ProductTwo from '../Components/Products/Product-Second.component';
import './cart.css';

function Cart() {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsFromFirebase = [];
        const subscriber = firestore.collection("cart").onSnapshot((querySnapshot) =>
        {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                    ...doc.data(),
                    id : doc.id
                });
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
       });
        return () => subscriber();
    }, [loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>;
    }

    const deletePost = (post) => {

        firestore.collection('cart').doc(post.id).delete().then(() => {
            window.location.reload();
          });

    }






  return (
    <div className='cart-row'>
      {
          posts.length > 0 ? (
            posts.map((post) => 
            <div>
            <ProductTwo id={post.id} prize={post.productPrize} image_One={post.productImage} card_Title={post.productName}  post ={post} />
            <button className='delete-button' onClick={() => deletePost(post)}>Delete</button>
            </div>)
            ) : (<h1>no items in cart</h1>)
      }
    </div>
  );
}

export default Cart;
