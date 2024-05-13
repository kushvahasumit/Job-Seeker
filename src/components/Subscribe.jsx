import React from 'react'
import "./Subscribe.css"

export default function Subscribe() {
  return (
    <>
      <div id="container">
        <h2>Subscribe</h2>
        <p>Stay updated with our newsletter</p>
        <form>
          <input type="email" placeholder="Type your Email" required />
          <br />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
}
