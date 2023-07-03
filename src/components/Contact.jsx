import React from 'react'

export default function Contact() {
  return (
    <div className="contact">
        <main>
            <h1>
                Contact US
            </h1>
            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder='Abc'/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='Abc@xyz.com'/>
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Tell us about your query...' />

                </div>
                <button type='Submit'>Send</button>
            </form>
        </main>
    </div>
  )
}
