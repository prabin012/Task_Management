import './notic.css'

const Notification = ({n}) => {
  return (
    <div>
      <div className="notic">
        <span className="niticmeassage">{n}</span>
      </div>
    </div>
  )
}

export default Notification
