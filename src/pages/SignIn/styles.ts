import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.form`
  display: flex;
  width: 100%;
  max-width: 500px;
  margin-right: 30px;
  background: #fff;
  height: 60%;
  border-radius: 50px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 30px;
`;

export const Input = styled.input`
  height: 60px;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #eee;
  background: #eee;
`;

export const Button = styled.button`
  height: 60px;
  width: 80%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #1d50fc;
  background: #1d50fc;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
`;

export const Link = styled.a``;
