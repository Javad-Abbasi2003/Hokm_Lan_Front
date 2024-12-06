import { useOutletContext } from "react-router-dom";
import styles from "./GameOverPage.module.css";
import { newGame } from "../WebSocket/sendRequests";

const GameOverPage = () => {
  const { sendJsonMessage, userName, gameObject } = useOutletContext();

  if (!userName) location.pathname = ""; //redirect unAuthorized users

  if(gameObject.winners.length == 0) return(
    <h1>ReStarting...</h1>
  )

  return (
    <div className={styles.container}>
      {gameObject?.winners.includes(userName) ?
        <h1 style={{color: "green"}}>!!! YOU WON !!!</h1>
      :
        <h1 style={{color: "red"}}>!!! YOU LOST !!!</h1>
      }
      <button onClick={() => newGame(sendJsonMessage)}>start again</button>
    </div>
  );
};

export default GameOverPage;