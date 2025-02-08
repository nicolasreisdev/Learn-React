import styles from './Comment.module.css';
import Image from '../assets/ignite-logo.svg';
import { Avatar } from './Avatar';
import  Trash  from '../assets/trash.svg';
import { useState } from 'react';

export function Comment({content,onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount+1);
    }
    

    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src={Image} alt="Logo Ignite" />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>

                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Nicolas Reis</strong>
                            <time title="Janeiro"  dateTime="2025-02-03 16:40:10">Cerca de 1h</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <img src={Trash} alt="" className={styles.trashIcon} />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}