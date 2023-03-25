import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { makeClip, makeNote, splitNote } from '../.';
// import { flow } from 'fp-ts/lib/function';

const transformNote = splitNote(10);

const App = () => {
  React.useEffect(() => {
    const clip = makeClip({
      duration: 100,
      notes: transformNote(makeNote({ duration: 100 })),
    });

    console.log(clip);
  }, []);

  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
