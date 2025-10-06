import React, { useEffect, useState } from "react";
import axios from "axios";

function AboutUs() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5002/about")
      .then(response => setAbout(response.data))
      .catch(error => console.error("Error fetching About Us data:", error));
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>About Us</h1>
      <img 
        src={about.imageUrl} 
        alt="Profile" 
        style={{ width: "200px", borderRadius: "50%", marginTop: "1rem" }}
      />
      <h2>{about.name}</h2>
      <p style={{ maxWidth: "600px", margin: "1rem auto", lineHeight: "1.5" }}>
        {about.bio}
      </p>
    </div>
  );
}

export default AboutUs;