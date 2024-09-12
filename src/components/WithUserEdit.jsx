import { useDispatch } from 'react-redux';
import { updateUser } from '../features/store';

const WithUserEdit = (Component) => {
  return (props) => {
    const dispatch = useDispatch();

    const handleEditUser = (user) => {
      dispatch(updateUser({
        id: user.id,
        name: user.name,
        age: user.age
      }));
    };

    return <Component {...props} onEditUser={handleEditUser} />;
  };
};

export default WithUserEdit;
