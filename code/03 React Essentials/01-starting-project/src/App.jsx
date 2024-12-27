
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          {/* Assigning individual props */}
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          {/* Using spread (properties names should match) */}
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>

          <h2>Core Concepts with .map</h2>
          <ul>
            {/* Using map and spread (properties names should match) */}
            {CORE_CONCEPTS.map(
              (concept, index) => ( <CoreConcept key={index} {...concept} /> )
            )}
          </ul>

        </section>
      </main>
    </div>
  );
}

export default App;
