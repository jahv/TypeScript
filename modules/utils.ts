function square(x) {
  return Math.pow(x, 2);
}

function cow() {
  console.log("Mooooo !!!!");
}

export default function add(a, b) {
  console.log(a+b);
}

export {square, cow};
