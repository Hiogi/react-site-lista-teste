import './Lista.css'

export function Lista(props) {

  return (<>
      <div className="lista">
        <ul>
          {props.items.map(function(produto){
          return (
            <div className='marcar'>
              <input type={'checkbox'} className='check'/>  
              <li>{produto}</li>      
            </div>)              
          })}
        </ul>
      </div>
      <div className="input">
      </div>
  </>)
}