const App = () => {

  const name: string = 'Patrick Kobi'
  //const age: number = 19
  const ocupation: string = 'Desenvolvedor Web'
  const endereco: string = 'Rua Nossa Senhora das Graças, Duque de Caxias/RJ'
  const email: string = 'patrickpkttt@gmail.com'
  const telefone: string = '(21) 96805-5205'
  const linkedin: string = 'https://www.linkedin.com/in/patrickkobi/'
  //const foto: string = 'https://avatars.githubusercontent.com/u/77445900?v=4'

  const desc: string = 'Sou um jovem apaixonado portecnologia, com interesse em programação e inovação digital. Me destaco pela rápida aprendizagem e habilidades práticas em desenvolvimento de apps e websites. Sempre em busca de novos desafios, eu busco oportunidades para expandir meus conhecimentos e contribuir para soluções tecnológicas criativas e eficientes.'

  return (
    <div>
      <h2>{name}</h2>
      <h2>{ocupation}</h2>
      <h2>{endereco}</h2>
      <h2>{email}</h2>
      <h2>{telefone}</h2>
      <h2><a href={linkedin} target="_blank">{linkedin}</a></h2>
      <h2>{desc}</h2>
    </div>
  )
}

export default App
