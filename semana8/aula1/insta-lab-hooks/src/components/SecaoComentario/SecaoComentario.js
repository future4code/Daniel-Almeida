import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = ({enviarComentario}) => { 

	const [text, setText] = useState("");


	const onChangeComentario = (event) => {
		setText(event.target.value)
	}

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={text}
				onChange={onChangeComentario}
			/>
			<button onClick={() => {enviarComentario(text) }}>Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario