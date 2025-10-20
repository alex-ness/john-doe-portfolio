import React from "react";

function Contact() {
  return (
    <div className="page-container">
      <h2>Contact</h2>
      <p>Vous souhaitez nous contacter ? Rien de plus simple !</p>
      <p>Envoyez-moi un mail à : <a href="mailto:johndoe@mail.com">johndoe@mail.com</a></p>
      <p>Ou appelez-moi directement au : <a href="tel:+330612345678">06 12 34 56 78</a></p>
      <p>Je serai ravi d'échanger sur vos projets web.</p>
    </div>
  );
}

export default Contact;