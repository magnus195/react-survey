import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const {answersList, editHandler, deleteHandler} = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
          <AnswersItem answerItem={answerItem} key={i} editHandler={() => editHandler(answerItem.id)}
                       deleteHandler={() => deleteHandler(answerItem.id)}/>
      ))}
    </ul>
  );
}
