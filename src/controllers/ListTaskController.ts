import api from '../services/api';
import iTaskDTO from '../dtos/iTaskDTO';

const ListTaskController = async (): Promise<iTaskDTO[] | undefined> => {
  try {
    const token = localStorage.getItem('@intranett_token');
    const response = await api.get('tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export default ListTaskController;
