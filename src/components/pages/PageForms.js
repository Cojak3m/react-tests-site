import React, { useState } from 'react';
import { quizItems } from '../actions/quiz-data';
import { colorOptions } from '../actions/dropdown-colors';
import FormAccordion from './FormAccordion';
import FormDropdown from './FormDropdown';
import FormSearch from './FormSearch';

const PageForms = () => {
    const [selected, setSelected] = useState(colorOptions[0]);
    return (
        <div>
            <div className='ui segment raised'>
                <FormAccordion items={ quizItems } />
            </div>
            <div className='ui segment raised'>
                <FormDropdown 
                    label='Select a color'
                    options={colorOptions}
                    selected={ selected }
                    onSelectedChange={setSelected}
                />
            </div>
            <div className='ui segment raised'>
                <FormSearch />
            </div>
        </div>
    );
}

export default PageForms;