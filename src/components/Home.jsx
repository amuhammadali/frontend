import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    const res = await fetch("https://backend-s7m9.onrender.com/pets");
    const data = await res.json();
    setPets(data);
  };

  const deletePet = async (id) => {
    const res = await fetch(`https://backend-s7m9.onrender.com/pets/del/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message || "Deleted");
    fetchPets(); // Refresh
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="container">
      <h1>Hayvonlar</h1>
      <Link to="/add" className="add-btn">
        + Yangi Qo‘shish
      </Link>
      {pets.map((pet) => (
        <div className="pet-card" key={pet.id}>
          <div className="pet-card-info">
            {pet.name} — {pet.species}
          </div>
          {/* <button className="delete-btn" onClick={() => deletePet(pet.id)}>
            🗑 O‘chirish
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Home;
