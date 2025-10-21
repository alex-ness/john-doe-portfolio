import React from "react";

function Contact() {
  return (
    <div className="page-container container my-5">
      <h2 className="mb-4 text-center">Contact</h2>
      <p className="text-center">Vous souhaitez nous contacter ? Rien de plus simple !</p>
      
      <form className="mb-5">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" id="name" className="form-control" placeholder="Votre nom" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Votre email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-control" rows="4" placeholder="Votre message"></textarea>
        </div>
          <button type="submit" className="btn btn-dark">Envoyer</button>
      </form>
        <div className="mt-4">
    <h5 className="mb-2">Localisation</h5>
      <div className="ratio ratio-16x9">
       <iframe
         title="Google Maps - John Doe"
         src="https://www.google.com/maps?q=2+rue+Kellermann+59100+Roubaix&output=embed"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade" />
      </div>
    <p className="mt-2"><a href="https://www.google.com/maps?q=2+rue+Kellermann+59100+Roubaix" target="_blank" rel="noopener noreferrer nofollow">Voir sur Google Maps</a></p>
    </div>  

       <div className="map-container">
        <iframe
          title="localisation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999045264301!2d2.2922926156744764!3d48.85837307928764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc7c1e6e7af%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1637857839984!5m2!1sfr!2sfr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"></iframe>
        </div>

      <p>Envoyez-moi un mail à : <a href="mailto:johndoe@mail.com">johndoe@mail.com</a></p>
      <p>Ou appelez-moi directement au : <a href="tel:+330612345678">06 12 34 56 78</a></p>
      <p>Je serai ravi d'échanger sur vos projets web.</p>
    </div>
  );
}

export default Contact;