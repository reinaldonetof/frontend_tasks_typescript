import api from '../services/api';
import iTaskDTO from '../dtos/iTaskDTO';

interface iUpdateTask {
  taskid: string | undefined;
  comments?: string;
  status: string;
  finish_date: Date | null;
}

const UpdateTaskController = async ({
  taskid,
  comments,
  status,
  finish_date,
}: iUpdateTask): Promise<iTaskDTO | undefined> => {
  try {
    const token = localStorage.getItem('@intranett_token');
    const response = await api.put(
      `tasks/${taskid}`,
      { comments, status, finish_date },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    return response.data;
  } catch (e) {
    alert(e.response.data.message);
    return undefined;
  }
};

export default UpdateTaskController;
