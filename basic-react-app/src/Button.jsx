function sayHello() {
  console.log("hello world");
}

export default function Button() {
  return (
    <div>
      <button onClick={sayHello}>Click Me</button>
      <p onClick={sayHello}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        delectus fugiat odio laudantium excepturi quod error eveniet voluptatum
        sint minima dolores consectetur nesciunt minus tempore asperiores,
        ipsum, vero doloremque totam?
      </p>
    </div>
  );
}
