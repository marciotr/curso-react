import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './styles.css';

function Title({name, P}) {
  // const name = "Márcio Torres";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`${name}`}</h1>
      {P ? (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              emporibus, modi amet reiciendis expedita reprehenderit
              dolor sapiente quae unde veniam doloribus repudiandae
              ex veritatis ab dignissimos iste sed,
              officiis nemo quos?
          </p>
        ) : (
          <p>não é um paragrafo</p>
        )
      }
    </>
  )
}

export default Title
