import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPet() {
  const [form, setForm] = useState({
    name: "",
    species: "",
    size: "",
    special_power: "",
    origin: "",
    is_friendly: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://backend-s7m9.onrender.com/pets/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Yangi Mega Hayvon Qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nomi"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="species"
          placeholder="Turi"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="size"
          placeholder="O‘lchami"
          onChange={handleChange}
        />
        <input
          type="text"
          name="special_power"
          placeholder="Qobiliyati"
          onChange={handleChange}
        />
        <input
          type="text"
          name="origin"
          placeholder="Qayerdan kelgan"
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="is_friendly"
            checked={form.is_friendly}
            onChange={handleChange}
          />
          Do‘stona
        </label>

        <button type="submit">Qo‘shish</button>
      </form>
    </div>
  );
}

export default AddPet;
