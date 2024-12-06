'use client'

import { useState } from 'react'
import { Bot, Send, X } from 'lucide-react'
import { useChat } from 'ai/react'

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-4 right-4 flex flex-col items-end">
          <div className="bg-primary text-primary-foreground p-2 rounded-t-lg mb-2 shadow-lg animate-bounce">
            Zeptejte se AI asistenta!
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            <Bot size={24} />
          </button>
        </div>
      )}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-background border border-border rounded-lg shadow-xl flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h3 className="font-bold">AI Asistent</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow overflow-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground">
                Zeptejte se mě na cokoliv o tomto portfoliu!
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-border flex">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Napište zprávu..."
              className="flex-grow mr-2 p-2 rounded-md border border-input bg-background"
            />
            <button type="submit" className="bg-primary text-primary-foreground p-2 rounded-md">
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

