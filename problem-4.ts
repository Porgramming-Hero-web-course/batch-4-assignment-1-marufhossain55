type Rectangle = {
  shape: 'rectangle';
  width: number;
  height: number;
};
type Circle = {
  shape: 'circle';
  radius: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === 'circle') {
    return parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
  } else if (shape.shape === 'rectangle') {
    return parseFloat((shape.width * shape.height).toFixed(2));
  } else {
    throw new Error('Invalid shape type');
  }
}
