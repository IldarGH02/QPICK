import Button from "components/Button"
import Input from "components/Input"

const Modal = (props) => {

    return (
        <div className='modal'>
            <div className="modal__window">
                <div className="modal__content">
                    <h2 className="modal__title">Форма заявки</h2>
                    <form action="#" id="form">
                        <lable className="form__lable">
                            Введите Имя*
                            <Input
                                className='form__input'
                                type='text'
                            />
                        </lable>
                        <lable className="form__lable">
                            Введите E-mail*
                            <Input
                                className='form__input'
                                type='email'
                            />
                        </lable>
                        <lable className="form__lable">
                            Введите телефон*
                            <Input
                                className='form__input'
                                type='tel'
                            />
                        </lable>
                        <Button
                            text='Отправить заявку'
                            className='form__submit form__button'
                            onClick={props.handleSubmit}
                        />
                    </form>
                </div>
                <Button
                    className='modal__close'
                    onClick={props.onClose}
                    text='X'
                />
            </div>
        </div>
    )
}

export default Modal