import React from "react";
import projects from "../data/projects"; 

function Portfolio() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mes réalisations</h2>
      <div className="row">
        {projects.map(p => (
          <div key={p.id} className="col-sm-6 col-md-4 mb-4">
            <div className="card h-100 card-hover">
              <img src={p.image} className="card-img-top" alt={p.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer nofollow" className="btn btn-primary mt-auto btn-hover">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;