import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withUserEdit from './WithUserEdit';

function EditUser({ onEditUser }) {
  const { userId } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((u) => u.id === parseInt(userId))
  );

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        surname: user.surname || '',
        age: user.age || 0,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditUser({ id: userId, ...formData });
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f2f2f2',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px'
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Editar Usuario</h2>
      <label style={{ marginBottom: '5px', color: '#555' }}>Nombre:</label>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Ingrese el nombre"
        style={{
          width: '250px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          fontSize: '16px',
          transition: 'border-color 0.2s',
        }}
        onFocus={(e) => e.target.style.borderColor = '#66afe9'}
        onBlur={(e) => e.target.style.borderColor = '#ccc'}
      />
      <button
        style={{
          background: '#007bff',
          color: 'white',
          padding: '10px 25px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        }}
        type="submit"
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Guardar
      </button>
    </form>
  );
}

export default withUserEdit(EditUser);
