import { useState } from 'react';
import { Drawer } from './Drawer/Drawer';
import testData from './testData.json';

function App() {
  const [open, setOpen] = useState(false);

  const generateSections = () => {
    return (
      <>
        {testData.sections.map((section) => {
          return (
            <div key={section.id}>
              {section.text}
              {section.subsections &&
                section.subsections.map((subSection) => {
                  return (
                    <div key={subSection.id} style={{ color: 'red' }}>
                      {subSection.text}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Drawer isOpen={open} setOpen={setOpen} title={testData.title}>
      {generateSections()}
    </Drawer>
  );
}

export default App;
