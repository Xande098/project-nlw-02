import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/61258520?s=460&u=47586428180cc1f5640253556eee97d6a9b06c55&v=4" alt="Alexandre Sobota" />
                <div>
                    <strong>Alexandre Sobota</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias.
                    <br /><br />
                    Sou apaixonado pela tecnologia, em especial pela programação, e utilizo a mesma para buscar alternativas para melhorar a vida das pessoas.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;