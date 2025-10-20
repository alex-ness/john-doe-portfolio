
import React, { useEffect } from "react";

function MentionsLegales() {
  useEffect(() => {
    document.title = 'Mentions légales – John Doe';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="container mt-4">
      <h2>Mentions légales</h2>
      <p>Ce site est édité par John Doe, développeur web indépendant.</p>
      <p>2 rue Kellermann, 59100 Roubaix.</p>
      <p>Les contenus de ce site sont la propriété de John Doe. Toute reproduction est interdite sans autorisation.</p>
      <p>Dernière mise à jour : octobre 2025</p>
    </div>
  );
}

export default MentionsLegales;