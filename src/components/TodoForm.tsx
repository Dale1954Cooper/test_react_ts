import React, {FC, useRef, KeyboardEvent} from 'react';


interface Props {
    onAdd(title: string): void
}

const TodoForm: FC<Props> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null)


    const keyPressHandler = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value);
            ref.current!.value = '';
        }
        console.log('kk')
    }

    return (
        <div className='input-field mt2'>
            <input
                ref={ref}
                onKeyPress={keyPressHandler}
                type='text'
                id='title'
                placeholder='Введите название дела'
            />
            <label htmlFor='title' className='active'>Введите название дела</label>
        </div>
    );
};

export default TodoForm;