export default function Card(props) {
  console.log(props);
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-12 ">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8MHwwfHx8MA%3D%3D"
          alt=""
          width="384"
          height="512"></img>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              this is the best platform for learning
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{props.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              Software Engineer, Microsoft
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
