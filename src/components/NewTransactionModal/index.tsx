import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="modal-overlay"
          className="modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className='modal-close'
            >
                <img src={closeImg} alt="Fechar Modal"/>
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título"/>
                <input type="number" placeholder="Valor"/>
                <input placeholder="Categoria"/>

                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}