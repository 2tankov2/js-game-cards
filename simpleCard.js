// BEGIN (write your solution here)
const make = (name, points) =>
  (message) =>{
    switch (message) {
      case 'getName':
        return name;
      case 'damage':
        return points;
      default:
        return 'undefined method';
    }
  };

export default make;
// END
