import { useState } from "react";
let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];
export default function ShapeEditor() {
    const [shapes,setShapes] = useState(initialShapes);


    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square')return shape;
            else return {
                ...shape,
                y: shape.y + 50,
            }
        });
          setShapes(nextShapes)
    }
  
}