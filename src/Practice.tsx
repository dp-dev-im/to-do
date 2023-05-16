import { useRecoilState } from "recoil";
import { KmSelector, hoursSelector, mileState, minutesState } from "./FixAtom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const Board = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 10px;
  padding-top: 25px;
  border-radius: 3px;
  min-height: 200px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
`;

function Practice() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hoursSelector);
  const [mile, setMile] = useRecoilState(mileState);
  const [km, setKm] = useRecoilState(KmSelector);

  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  const onMileChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMile(+event.currentTarget.value);
  };
  const onKmChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKm(+event.currentTarget.value);
  };
  const onDragEnd = () => {};
  return (
    <>
      <h1>Practice</h1>
      <br />
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="minutes"
      />
      <input
        value={hours}
        onChange={onHoursChange}
        type="number"
        placeholder="hours"
      />

      <hr />
      <input
        value={mile}
        onChange={onMileChange}
        type="number"
        placeholder="M"
      />
      <input value={km} onChange={onKmChange} type="number" placeholder="K" />
      <>
        <DragDropContext onDragEnd={onDragEnd}>
          <Wrapper>
            <Boards>
              <Droppable droppableId="one">
                {(provided) => (
                  <Board ref={provided.innerRef} {...provided.droppableProps}>
                    <Draggable draggableId="first" index={0}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          one
                        </Card>
                      )}
                    </Draggable>
                    <Draggable draggableId="second" index={1}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          two
                        </Card>
                      )}
                    </Draggable>
                  </Board>
                )}
              </Droppable>
            </Boards>
          </Wrapper>
        </DragDropContext>
      </>
    </>
  );
}

export default Practice;
