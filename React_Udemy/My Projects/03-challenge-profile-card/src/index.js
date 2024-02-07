import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avtar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avtar() {
  return <img className="avatar" src="images/shivu2.jpeg" alt="Shivani"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Shivani Gondha</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color="chartreuse" />
      <Skill skill="CSS" emoji="💪" color="yellow" />
      <Skill skill="JavaScript" emoji="💪" color="darksalmon" />
      <Skill skill="React" emoji="💪" color="cadetblue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
