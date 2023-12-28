// a variable should have both types 🤔
 
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
  // now it must have both members
  drag() {},
  resize() {},
};
