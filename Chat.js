// чат
import React, {useRef} from 'react';
// import './Chat.css'

function Chat() {
    const chatMassagesRef=useRef(null);
    const inputRef = useRef(null);

    function handleFormSubmit(e){
        e.preventDefault();
        const message = inputRef.current.value;
        inputRef.current.value = '';
        send(message);
    }

    function send(message){
        const messageItem = document.createElement('p');
        messageItem.textContent = message;
        messageItem.classList.add('message');

        chatMassagesRef.current.appendChild(messageItem);

        setTimeout(()=>{
            chatMassagesRef.current.removeChild(messageItem)
        }, 7000)

        // fetch на случай отправки на сервер
        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message})
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        .then(err=>console.error(err))
    }

    return(
        <>
            <div className='mainChat'>
                <div ref={chatMassagesRef} className='messages'></div>
            </div>
            <div className='divInput'>
                <form className='form' onSubmit={handleFormSubmit}>
                    <input ref={inputRef} className='input' type="text" placeholder='Введите сообщение' maxlength='30' />
                    <button className='button' type='submit'>Send message</button>
                </form>
            </div>
        </>
    );
}

export default Chat;
