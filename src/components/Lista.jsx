import './Lista.css'

export function Lista(props) {

  return (<>
      <div className="Lista">
        <ul>
          {props.items.map(function(produto){
          return (
            <div className='Marcar'>
              <input type={'checkbox'} className='Check'/>  
              <li>{produto}</li>      
            </div>)              
          })}
        </ul>
      </div>
      <div className="Input">
      </div>
  </>)
}