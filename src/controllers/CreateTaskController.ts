import api from '../services/api';
import iTaskDTO from '../dtos/iTaskDTO';

interface iCreateTask {
  title: string;
  date: Date | null;
}

const CreateTaskController = async ({
  title,
  date,
}: iCreateTask): Promise<iTaskDTO | undefined> => {
  try {
    const token = localStorage.getItem('@intranett_token');
    const response = await api.post(
      'tasks',
      { title, date },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data.task;
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export default CreateTaskController;
