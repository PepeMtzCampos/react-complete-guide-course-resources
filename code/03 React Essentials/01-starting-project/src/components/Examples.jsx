import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleTabClick(selectedButton) {
      console.log(selectedButton + ' Button clicked!');
      setSelectedTopic(selectedButton);
    }
    
    return (
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === 'components'} 
            onClick={() => handleTabClick('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'} 
            onClick={() => handleTabClick('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'} 
            onClick={() => handleTabClick('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'} 
            onClick={() => handleTabClick('state')}
          >
            State
          </TabButton>
        </menu>
        
        {!selectedTopic ? 
          (<p>Please select a topic</p>) 
          : 
          (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )
        }

      </section>
    );
}