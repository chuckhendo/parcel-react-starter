import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`;

const App: React.FC = () => {
  return (
    <Container>
      <h1>App</h1>
      <p>
        Enter some text in this input in your browser, then edit App.tsx and
        save. The text should remain inside of the input
      </p>
      <input />
    </Container>
  );
};

export default App;
