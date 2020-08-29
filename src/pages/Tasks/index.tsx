import React, { useState, useCallback, useEffect, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import { parseISO, format } from 'date-fns';
import {
  Container,
  Card,
  Title,
  Line,
  Table,
  Button,
  ButtonForm,
  CardForm,
  InputForm,
  TitleForm,
  InputDate,
  ButtonArea,
} from './styles';
import ListTaskController from '../../controllers/ListTaskController';
import iTaskDTO from '../../dtos/iTaskDTO';
import Modal from '../../components/Modal';
import 'react-datepicker/dist/react-datepicker.css';

import CreateTaskController from '../../controllers/CreateTaskController';
import UpdateTaskController from '../../controllers/UpdateTaskController';

import {
  validateCreateTask,
  validateUpdateTask,
} from '../../validators/validators';
import sortArray from '../../utils/sortArray.js';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<iTaskDTO[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [nameTask, setNameTask] = useState('');
  const [finishDate, setFinishDate] = useState<Date | null>(new Date());
  const [comments, setComments] = useState('');
  const [activityType, setActivityType] = useState('');
  const [toUpdateTask, setToUpdateTask] = useState<iTaskDTO | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    ListTaskController().then(val => {
      if (val) {
        const sortedTasks = sortArray(val);
        setTasks(sortedTasks);
      }
    });
  }, [tasks]);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validateCreateTask({ name: nameTask, date: startDate });
      const response = await CreateTaskController({
        title: nameTask,
        date: startDate,
      });
      if (response) {
        setOpenModal(false);
        setTasks(oldTask => [...oldTask, response]);
      }
    } catch (err) {
      alert(JSON.stringify(err.errors));
    }
  };

  const handleUpdateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await validateUpdateTask({ finish_date: finishDate, status, comments });
      const response = await UpdateTaskController({
        taskid: toUpdateTask?.id,
        finish_date: finishDate,
        status,
        comments,
      });
      if (response) {
        setOpenModal(false);
        setTasks(oldTask => {
          const newTask = oldTask.filter(tsk => tsk.id !== response.id);
          return [...newTask, response];
        });
      }
    } catch (err) {
      alert(JSON.stringify(err.errors));
    }
  };

  const renderLine = (item: iTaskDTO) => (
    <tbody key={item.id}>
      <tr
        onClick={() => {
          setToUpdateTask(item);
          if (item.comments) setComments(item?.comments);
          setStatus(item.status);
          setActivityType('updateTask');
          setOpenModal(true);
        }}
      >
        <td>{item.title}</td>
        <td>{format(parseISO(item.date), 'dd/MM/yyyy HH:mm')}</td>
        {item.finish_date ? (
          <td>{format(parseISO(item.finish_date), 'dd/MM/yyyy HH:mm')}</td>
        ) : (
          <td />
        )}
        <td>{item.status}</td>
        <td>Ação</td>
      </tr>
    </tbody>
  );

  return (
    <Container>
      <Card>
        <Title>Tarefas</Title>
        <Table>
          <tbody>
            <tr>
              <th>Tarefa</th>
              <th>Início</th>
              <th>Término</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </tbody>
          {tasks.map(item => renderLine(item))}
        </Table>
      </Card>
      <Line>
        <Button
          onClick={() => {
            setOpenModal(true);
            setActivityType('createTask');
          }}
        >
          Nova Tarefa
        </Button>
      </Line>

      {openModal && activityType === 'createTask' && (
        <Modal>
          <CardForm onSubmit={handleCreateTask}>
            <TitleForm>Criar tarefa</TitleForm>
            <InputForm
              placeholder="Nome da tarefa"
              value={nameTask}
              onChange={e => setNameTask(e.target.value)}
            />
            <InputDate>
              <strong>Iniciar a tarefa</strong>

              <DatePicker
                selected={startDate}
                onChange={date => {
                  if (!Array.isArray(date)) setStartDate(date);
                }}
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
              />
            </InputDate>

            <ButtonArea>
              <ButtonForm>Criar tarefa</ButtonForm>
              <ButtonForm
                onClick={() => {
                  setNameTask('');
                  setOpenModal(false);
                }}
              >
                Cancelar
              </ButtonForm>
            </ButtonArea>
          </CardForm>
        </Modal>
      )}
      {openModal && activityType === 'updateTask' && (
        <Modal>
          <CardForm onSubmit={handleUpdateTask}>
            <TitleForm>
              {`Alterar tarefa
              ${toUpdateTask?.title}`}
            </TitleForm>
            <InputForm
              placeholder="Comentários da tarefa"
              value={comments}
              onChange={e => setComments(e.target.value)}
            />
            <InputDate>
              <strong>Finalizar a tarefa</strong>
              <DatePicker
                selected={finishDate}
                onChange={date => {
                  if (!Array.isArray(date)) setFinishDate(date);
                }}
                showTimeSelect
                timeFormat="p"
                timeIntervals={15}
                dateFormat="Pp"
              />
            </InputDate>
            <select value={status} onChange={e => setStatus(e.target.value)}>
              <option value="progress">Progress</option>
              <option value="finished">Finished</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <ButtonArea>
              <ButtonForm>Atualizar tarefa</ButtonForm>
              <ButtonForm
                onClick={() => {
                  setNameTask('');
                  setOpenModal(false);
                }}
              >
                Cancelar
              </ButtonForm>
            </ButtonArea>
          </CardForm>
        </Modal>
      )}
    </Container>
  );
};

export default Tasks;
