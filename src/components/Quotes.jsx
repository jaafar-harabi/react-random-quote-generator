import React, { useEffect, useState } from 'react'

import { TwitterIcon, TwitterShareButton } from 'react-share'; //necessary import

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
const Quotes = () => {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');


  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }



  useEffect(() => {
    getQuote()
  }, []);

  return (
    <Card className=" w-96 mx-auto mt-36 bg-responsive">
      <CardBody>
        <p className='text-xl'>   “{quote}“</p>
      
        
      </CardBody>
      <CardFooter className="pt-0">
      <p className='text-right'>{author} </p>
      
      <br/>
      <div className='text-center'>
      <TwitterShareButton
          title={`"${quote}" - ${author}`}
          url={'https://twitter.com'}
          
          
        >
          <TwitterIcon
            size={32}
            round={true}
            className="opacity-40 cursor-pointer hover:opacity-100"
          />
        </TwitterShareButton> 

      </div>
    
        
      </CardFooter>
      <Button  variant='outlined' color='blue' className='hover:text-white hover:bg-blue-300 border-0' onClick={handleClick} >New Quote</Button>
    </Card>
    
    
  )
}
  


export default Quotes