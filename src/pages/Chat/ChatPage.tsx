import React, { useEffect, useState } from "react"


export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

const ChatPage: React.FC = () => {
  return <div>
      <Chat />
  </div>
}

const Chat: React.FC = () => {
  const [ws, setWsChannel] = useState<WebSocket | null>(null)

  useEffect(() => {
    
    function createChannel() {
      setWsChannel(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'));    
    }
    createChannel();  
  }, [])

  useEffect(()=>{
    ws?.addEventListener('close', () => {
      console.log('CLOSE WS')
    })
  }, [ws])

  return <div>
      <Messages ws = {ws} />
      <AddMessageForm ws = {ws} />      
  </div>
}

const Messages: React.FC <{ws: WebSocket | null}>= ({ws}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  useEffect(()=> {
    ws?.addEventListener('message', (e) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages)=>[...prevMessages, ...newMessages])
    })
  }, [ws])

  return <div style = {{height: '400px', overflowY: 'auto'}}>
     {messages.map((m, index) => <Message key={index} message = {m} />)}
  </div>
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
  return <div>
      <img src={message.photo} style={{width: '30px'}} /> <b>{message.userName}</b>
      <br/>
      {message.message}
      <hr/>     
  </div>
}

const AddMessageForm: React.FC<{ws: WebSocket | null}> = ({ws}) => {
  const [message, setMessage] = useState('')
  const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

  useEffect(()=> {
    ws?.addEventListener('open', () => {
      setReadyStatus('ready');
    })
  }, [])

  const sendMessage = ()=> {
    if(!message) {
      return;
    }
    ws?.send(message)
    setMessage('')
  }
  return <div>
    <div>
        <textarea onChange ={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
    </div>
    <div>
        <button  onClick={sendMessage}>Send</button>
    </div>    
  </div>
}
export default ChatPage