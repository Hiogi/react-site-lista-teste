import './Lista.css'

export function Lista(props) {

  return (<>
      <div className="lista">
        <ul>
          {props.items.map(function(produto,indice){
          return (
            <div className='marcar' key={indice}>
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