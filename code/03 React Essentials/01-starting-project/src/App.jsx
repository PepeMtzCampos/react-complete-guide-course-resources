import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleTabClick(selectedButton) {
    console.log(selectedButton + ' Button clicked!');
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          {/*<h2>Core Concepts</h2> 
          <ul>
          {/* Assigning individual props /}
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          {/* Using spread (properties names should match) /}
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          */}
          <h2>Core Concepts with .map</h2>
          <ul>
            {/* Using map and spread (properties names should match) */}
            {CORE_CONCEPTS.map(
              (concept, index) => ( <CoreConcept key={index} {...concept} /> )
            )}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
