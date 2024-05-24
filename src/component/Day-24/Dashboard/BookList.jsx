import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import './dashboard.css';
import BookInfo from './BookInfo';

function BookList() {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  const api_key =import.meta.env.VITE_REACT_APP_API_KEY;
  useEffect(() => {
    console.log(api_key);
    const URL = `https://www.googleapis.com/books/v1/volumes?q=self+help&key=${api_key}`;
    axios.get(URL)
      .then(res=> setProduct(res.data.items))
      .catch(err => console.warn("Error while fetching Data", err));

  },[]);


  return (
    <>
      <div id='main'>        
        <div id="products">
          {
            product.map((item)=>{

              let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
              let author = item.volumeInfo.authors;
              console.log(author);
              if(thumbnail !== undefined && author !== undefined){
                return  <div id="item" key={item.id} onClick={()=>{setShow(true); setBookItem(item)}}>
                      <img src={thumbnail} alt="book image" />
                      <h5><u>Title</u>: {item.volumeInfo.title}</h5>
                      <h5><u>Author:</u> {author.at(0)} </h5>
                  </div>
              }
            })
          }
        </div>
      </div>
      <BookInfo show={show} bookItem = {bookItem} onClose={()=>setShow(false)}/>
    </>
  )
}

export default BookList;