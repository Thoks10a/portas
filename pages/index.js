import Porta from '../components/Porta'
import PortaModel from '../model/porta'
import Presente from '../components/Presente'

export default function Home() {
  const p1 = new PortaModel(1)
  const p2 = new PortaModel(2)
  return (
    <div style={{display: "flex",padding: "50px"}}>
      <Presente />
      <Porta porta={p1}/>
      <Porta porta={p2}/>
    </div>
  )
}
