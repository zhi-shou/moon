import styled from 'styled-components';

export const WordCard = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  position: relative;
`;

export const StatsMini = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.9em;
  color: #666;
`;

export const Stats = styled.div`
  margin: 20px 0;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
`;

export const Phonetic = styled.p`
  color: #666;
  font-style: italic;
  margin: 10px 0;
`;

export const Translation = styled.p`
  font-size: 1.4em;
  margin: 20px 0;
  color: #2c3e50;
`;

export const Example = styled.p`
  color: #444;
  margin: 15px 0;
  font-style: italic;
`;

export const ExampleTranslation = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    margin: 5px 0;
  }
`;

export const DifficultButton = styled(BaseButton)`
  background-color: #ff6b6b;
  color: white;
`;

export const LearningButton = styled(BaseButton)`
  background-color: #4dabf7;
  color: white;
`;

export const MasteredButton = styled(BaseButton)`
  background-color: #51cf66;
  color: white;
`;

export const ShowButton = styled(BaseButton)`
  background-color: #339af0;
  color: white;
  padding: 15px 30px;
  font-size: 1.1em;
`; 