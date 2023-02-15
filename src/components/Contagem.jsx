import './Contagem.css'

export function Contagem(props) {
	return  <div className='contador'>Há {props.tamanho} itens na lista </div>

	// let mensagem;

	// if(props.tamanho === 0){
	// 	mensagem = <div> Não há item na lista
	// }else if(props.tamanho === 1){
	// 	mensagem = <div style={{color:'red'}}> Há 1 item na lista</div>
	// }else {
	// 	mensagem = <div style={{color:'blue'}}>Há {props.tamanho} itens na lista</div>
	// }
	
	// // let mensagem = props.tamanho == 0 ? 'Não tem item na lista'
	// // 	: props.tamanho == 1 ? 'Tem 1 item na lista'
	// // 	: `Têm ${props.tamanho} itens na lista`
	
	// return <div className='contador'> {mensagem}</div>
}