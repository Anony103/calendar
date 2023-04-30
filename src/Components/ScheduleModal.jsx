import styled from 'styled-components';
import DatePicker from "react-datepicker";
import { useState } from 'react';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  
`;

export const Wrapper = styled.div`
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
`;

export const Modal = styled.div`
  width: 250px;
  height: 170px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  height: 40vh;
  width: 25vw;
`;

export const ModalHead = styled.div`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Heading  = styled.h5`
  margin: 0;
  padding: 10px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  :hover{
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  transform: translate(-4px, 4px);
  }
`;

export const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;
`;

export const ModalActions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DeleteButton  = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;
  :hover{
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
  transform: translateY(-5px);
  background: #ff3e4e;
  }
`;

export const CancelButton  = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #fcfcfc;
  transition: all 0.25s ease;
  :hover {
  box-shadow: none;
  transform: none;
  background: whitesmoke;
}
`;

export const Title = styled.p`
  
  
`;

export const Desc = styled.p`
  
  
`;

export const Date = styled.p`
  
  
`;

const ScheduleModal = ({ setIsOpen,en}) => {
  

  return (
    <Container>
      <Wrapper id={en.index}>
        <Modal>
          <ModalHead>
            <Heading>Task</Heading>
          </ModalHead>
          <CloseButton onClick={() => setIsOpen(false)}>
          <ion-icon name="close-outline"></ion-icon>
          </CloseButton>
          
          <ModalContent>
            <Title>{en.title}</Title>
            <Desc>{en.desc} </Desc>
            <DatePicker selected={en.start}/>
          </ModalContent>
          
          <ModalActions >
            <ActionsContainer >
              <DeleteButton  onClick={() => setIsOpen(false)}>
                Delete
              </DeleteButton >
              <CancelButton
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </CancelButton >
            </ActionsContainer>
          </ModalActions>
        </Modal>
      </Wrapper>
    </Container>
      )
}

export default ScheduleModal
