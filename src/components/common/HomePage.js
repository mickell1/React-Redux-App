import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>React & Redux</h1>

      <p>
        Redux is a predictable state container for JavaScript apps. (Not to be confused with a WordPress framework – Redux Framework.)
        It helps you write applications that behave consistently, run in different environments
        (client, server, and native), and are easy to test. On top of that, it provides a great developer
        experience, such as live code editing combined with a time traveling debugger.

        You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies).
      </p>

      <h3>React With Redux</h3>
      <p>
        From the very beginning, we need to stress that Redux has no relation to React. You can write
        Redux apps with React, Angular, Ember, jQuery, or vanilla JavaScript. That said, Redux works
        especially well with libraries like React and Deku because they let you describe UI as a function
        of state, and Redux emits state updates in response to actions. We will use React to build our simple todo app.
      </p>
    </div>
  );
};

export default Home;
