
import React, { useState, useEffect } from 'react';

export default function GithubModal({ open, onClose }) {
    const username = 'alex-ness';

  const [data, setData] = useState(null);     
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);   

  useEffect(() => {
    if (!open) return;    

    setLoading(true);   

    fetch(`https://api.github.com/users/${username}`)  
      .then(res => {
        if (!res.ok) throw new Error('Erreur API');  
        return res.json();                           
      })
      .then(json => setData(json))                   
      .catch(e => setError(e.message))               
      .finally(() => setLoading(false));             
  }, [open, username]);  

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <div
        className="modal-dialog-custom bg-white p-4 rounded-3 shadow"
        style={{ width: '90%', maxWidth: '420px' }}
      >
        {/* Bouton pour fermer la modale */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-outline-secondary mb-3"
          style={{ float: 'right' }}
        >
          ✕
        </button>

        {/* Gestion des 3 états possibles */}
        {loading && <p>Chargement...</p>}
        {error && <p className="text-danger">Erreur : {error}</p>}

        {/* Si on a reçu les données, on les affiche */}
        {data && (
          <div>
            <h5>{data.name || data.login}</h5> {/* (nom ou pseudo GitHub) */}
            <p>{data.bio}</p>                   {/* (bio GitHub si présente) */}
            <ul className="list-unstyled">
              <li><strong>Repos publics :</strong> {data.public_repos}</li>
              <li><strong>Followers :</strong> {data.followers}</li>
              <li><strong>Profil GitHub :</strong>{' '}
                <a href={data.html_url} target="_blank" rel="noreferrer">
                  {data.html_url}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
