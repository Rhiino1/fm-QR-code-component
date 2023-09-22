import Footer from "./layouts/Footer";
import qr from './assets/images/image-qr-code.png'

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between bg-[#d5e1ef]">
        <main className="w-screen h-screen mb-auto flex flex-col justify-center items-center">
          <section
            id="card"
            className="w-[330px] h-auto pt-4 pb-10 flex flex-col gap-5 justify-evenly items-center bg-white rounded-2xl"
          >
            <section id="card-img">
              <img
                src={qr}
                alt="qr-code"
                id="qr-code"
                className="w-[300px] rounded-xl"
              />
            </section>
            <article id="card-description">
              <h1 id="card-title" className="mx-7 font-outfit font-bold text-[#1F3251] text-[22px] text-center">
                Improve your front-end skills by building projects
              </h1>
              <p id="card-text" className="mt-5 mx-9 font-outfit font-normal text-base text-[#7B879D] text-center leading-tight">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </article>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
