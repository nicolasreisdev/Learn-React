import { format, formatDistanceToNow } from 'date-fns';
import { ptBR }  from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';



// Estado = variáveis que podem ser alteradas e que, quando alteradas, fazem com que o componente seja renderizado novamente

interface Author {
    name: string;
    avatarUrl: string;
    role: string;
}




interface Content {
    type: 'text' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}


interface PostProps {
    post: PostType;
}

export function Post({post}: PostProps) {

    const [comments, setComments] = useState([
        'Comentário 1'
    ])

    const [newCommentText, setNewCommentText] = useState(''); // Estado do novo comentário

    // FORMATAÇÃO DA DATA 1
    // const puslishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt);


    // FORMATAÇÃO DA DATA 2
    const puslishedDateFormatted = format(post.publishedAt, "dd 'de' MMM yyyy 'às' HH:mm'h'", {locale: ptBR});


    // FORMATAÇÃO DA DATA PARA RELATIVO
    const publishedDateRelativetoNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR, 
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault(); // Previne o comportamento padrão do formulário


        // Imutabilidade: Não posso alterar o estado diretamente, preciso criar um novo estado
        setComments([...comments, newCommentText]); // ...comments: pega todos os valores do estado atual, newCommentText: adiciona um novo valor ao estado
        setNewCommentText(''); // Limpa o campo de texto
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity(''); // Limpa a mensagem de erro personalizada
        setNewCommentText(event.target.value); // Altera o estado do novo comentário
    }   

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Digite um comentário antes de enviar'); // Define uma mensagem de erro personalizada
        setNewCommentText(event.target.value); // Altera o estado do novo comentário
    }


    function deleteComment(commentToDelete: string){
        const commentsWithoutDeletedOne = comments.filter(comments => { // Filtra os comentários, removendo o comentário deletado
                return comments !== commentToDelete; // Retorna todos os comentários que são diferentes do comentário deletado
        });

        setComments( commentsWithoutDeletedOne ); // Atualiza o estado dos comentários
    }

    const isNewCommentTextEmpty = newCommentText.length===0;

    return (
    <article className={styles.post}>


        <header>

            {/* Formatação do usuário */}
            <div className={styles.author}>

                <Avatar src={post.author.avatarUrl} />

                <div className={styles.authorInfo}>
                    <strong>{post.author.name}</strong>
                    <span>{post.author.role}</span>
                </div>

            </div>


            {/* Formatação da data */}
            <time title={puslishedDateFormatted} dateTime={post.publishedAt.toISOString()}>  
                {publishedDateRelativetoNow}
            </time>

        </header>


        <div className={styles.content}>

            {/* Formatação do conteúdo */}
            {post.content.map(line => {

                // Se o tipo for texto, renderiza um parágrafo
                if(line.type === 'text') {
                    return <p key={line.content}>{line.content}</p>
                }
                else if(line.type === 'link') { // Se o tipo for link, renderiza um link
                    return <p key={line.content}><a href={line.content}>{line.content}</a></p>
                }

            })}
            
        </div>


        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

            <strong>Leave a comment</strong>

            <textarea 
                name="input"
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required // Define que o campo é obrigatório, não podendo ser enviado vazio
            />

            <footer>
                <button type='submit' disabled={isNewCommentTextEmpty}>
                    Comentar
                </button>
            </footer>

        </form>

        <div className={styles.commentList}>

            {comments.map(comment => {
                return (
                    <Comment 
                        key={comment}
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                )
            })}

        </div>

    </article>
);
}