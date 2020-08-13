import React, { useState, useEffect, useRef } from 'react';

const FormDropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=> {
        const onBodyClick = (event) => {
            if(ref.current !== null) {
                if (ref.current.contains(event.target)) {
                    return;
                }
            }
            setOpen(false);
        }
        console.log('FormDropdown addEventListener:');
        document.body.addEventListener('click', onBodyClick);

        return() => {
            console.log('FormDropdown removeEventListener');
            document.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div 
                key={option.value}
                className='item'
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return(
        <div ref={ref} className='ui form'>
            <div className='field'>     
                <label className='label'>{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible' : ''} `}
                >
                    <i className='dropdown icon' />
                    <div className='text' >{ selected.label }</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`} >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default FormDropdown;