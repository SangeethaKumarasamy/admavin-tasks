import { Outlet, Link } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <nav>
        <ul >
         
          <li>
            <Link to="/treereply"><b>Tree Reply</b></Link>
          </li>
          <li>
            <Link to="/splitbox"><b>Split Box</b></Link>
          </li>
          <li>
            <Link to="/tictactoe"><b>Tic Tac Toe</b></Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default LayOut;