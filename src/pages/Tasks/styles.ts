import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  background: #fff;
  height: 80%;
  border-radius: 50px;
  flex-direction: column;
`;

export const Title = styled.h2`
  background: #999;
  text-align: center;
  width: 100%;
  height: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-top: 10px;
`;

export const Line = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  margin-top: 10px;
  justify-content: flex-end;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 25%;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid #1d50fc;
  background: #1d50fc;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

export const CardForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleForm = styled.h2`
  text-align: center;
  margin-top: 30px;
  color: #fff;
`;

export const InputForm = styled.input``;
export const InputDate = styled.div`
  height: 60px;
  width: 80%;
  padding: 10px;
  border-radius: 15px;
  > strong {
    color: #fff;
    margin-right: 10px;
  }
`;

export const ButtonForm = styled.button`
  height: 60px;
  width: 45%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #1d50fc;
  background: #1d50fc;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
