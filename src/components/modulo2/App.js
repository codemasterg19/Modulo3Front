import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Space, Typography } from 'antd';
import { increment, decrement, incrementAsync } from './actions';

const { Title } = Typography;

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <Card
      style={{ width: 300, margin: 'auto', marginTop: 50, textAlign: 'center' }}
    >
      <Title level={2}>Contador</Title>
      <Title level={3}>{count}</Title>
      <Space direction="vertical">
        <Space>
          <Button type="primary" onClick={() => dispatch(increment())}>
            Incrementar
          </Button>
          <Button danger onClick={() => dispatch(decrement())}>
            Decrementar
          </Button>
        </Space>
        <Button onClick={() => dispatch(incrementAsync())}>
          Incrementar Async (1s)
        </Button>
      </Space>
    </Card>
  );
}

export default App;