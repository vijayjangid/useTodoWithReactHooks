import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles.css";

export default function Todo({ todo, toggleCompleted }) {
  const { zIndex, boxShadow, scale } = useSpring({
    to: { zIndex: 0, boxShadow: 0, scale: 1 },
    from: { zIndex: 1, boxShadow: 10, scale: 1.2 }
  });
  const completedClass = todo.completed ? "completed" : "";
  return (
    <animated.div
      style={{
        zIndex,
        boxShadow: boxShadow.interpolate(
          s => `rgba(0, 0, 0, 0.15) 0px 0px ${2 * s}px 0px`
        ),
        transform: scale.interpolate(s => `scale(1,${s})`)
      }}
      className={`todo-item ${completedClass}`}
      onClick={() => toggleCompleted(!todo.completed)}
    >
      {todo.completed ? (
        <i title="click to unmark completed" className="far fa-check-circle" />
      ) : (
        <i title="click to mark completed" className="far fa-circle" />
      )}
      {todo.text}
    </animated.div>
  );
}
