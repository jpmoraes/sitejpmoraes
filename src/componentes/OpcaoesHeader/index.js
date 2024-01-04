import "./style.css"

function OpcaoesHeader(){
    const textOpcoes = ["QUEM SOU EU?", "INTERESSES","PRODUÇÕES", "CONTRIBUA", "CONTATOS"]
    
    return(
        <ul className="Menu">
        {textOpcoes.map((texto) =>(
            <li className="opcao"><p>{texto}</p></li>
        ))}
      </ul>  
    )

}

export default OpcaoesHeader