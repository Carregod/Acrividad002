import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../features/store";
import { useEffect } from "react";

function UserList() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div style={{ color: '#888' }}>Cargando...</div>;
  if (status === 'failed') return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#333' }}>Selecciona un usuario a editar</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users?.map(({ id, name }) => (
          <li
            key={id}
            onClick={() => navigate(`/edit/${id}`)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: '#f5f5f5',
              borderRadius: '5px',
              margin: '5px 0',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchUsers } from "../features/store";
// import { useEffect } from "react";

// function UserList() {
//   const dispatch = useDispatch();
//   const { users, status, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (status === 'idle') dispatch(fetchUsers());
//   }, [dispatch, status]);

//   if (status === 'loading') return <div>Loading...</div>;

//   if (status === 'failed') return <div>Error: {error}</div>;

//   return (
//     <ul style={{ color: 'black' }}>
//       <h1>Seleciona usuario a editar</h1>
//       {users?.map(({ id, name }) => (
//         <li key={id} onClick={() => navigate(`/edit/${id}`)}>
//           {name}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default UserList;

