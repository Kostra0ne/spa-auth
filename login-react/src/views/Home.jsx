import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="title">Home</h1>
      <p>
        Welcome.
        <br />
        Ceci est une app de démo de React.
      </p>
      <h2 className="title">Key features</h2>
      <ul>
        <li>authentification</li>
        <li>file upload</li>
        <li>
          Affichage conditionnel en fonction du status de login et du rôle
        </li>
        <li>contact form</li>
      </ul>
    </div>
  );
}
