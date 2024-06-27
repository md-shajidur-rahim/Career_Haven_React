import { VscBook, VscChecklist, VscStarFull } from "react-icons/vsc";

const AboutPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-auto py-8">
      <div className="flex items-center mb-4">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">About React</h1>
      </div>
      <ul className="text-xl mb-10 list-disc list-inside text-left max-w-xl">
        <li>
          React is a JavaScript library/framework for building user interfaces.
          It was created by Facebook.
        </li>
        <li>Websites/UIs are looked at in terms of components.</li>
        <li>
          React is currently the most popular out of the major front-end
          frameworks.
        </li>
      </ul>

      <div className="flex items-center mb-4">
        <VscChecklist className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Why React</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>
          React allows us to build very dynamic and interactive websites and
          user interfaces.
        </li>
        <li>Very fast, especially with the new compiler.</li>
        <li>There is a huge ecosystem from Next.js to React Native.</li>
        <li>Best framework to learn to get a job.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscStarFull className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React DOM</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>Document Object Module</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React Components</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>
          Reusable piece of code that can be used to build elements on the page.
        </li>
        <li>
          Allows us to break down complex UIs, which makes them easier to
          maintain and scale.
        </li>
        <li>
          Components can get ‘props’ passed in and can hold their own state.
        </li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React States</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>State represents the data that a component manages internally.</li>
        <li>
          This could be a form input, fetched data, UI related data like if a
          modal is open/close.
        </li>
        <li>
          There is also global state, which relates to the app as a whole and
          not a single component.
        </li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React Hooks</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>
          Allows us to use state and other React features within functional
          components.
        </li>
        <li>A. useState, B. useEffect, C. useRef, D. useReducer.</li>
        <li>
          *** useContext, useMemo, & useCallback hooks removed in new versions.
        </li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscStarFull className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">3 Types of React Website</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>
          a) Single Page App (SPA): Load a single HTML file and JavaScript loads
          the entire UI including routes.
        </li>
        <li>
          b) Server-side Rendered (SSR): Server sends fully rendered page to
          client. I can fetch data and load it as well.
        </li>
        <li>
          c) Static Site Generation (SSG): Some generates static HTML files at
          build time. These are very fast.
        </li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">About Vite</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-xl">
        <li>
        ‘Vite’ is a very fast front-end toolkit that can be used for all kinds of JS projects including React.
        </li>
        <li>It is built on top of ‘ESBuild’, which is a very fast JS bundler.</li>
        <li>
        Fast development server with hot-reload.
        </li>
        <li>Installed with ‘npm create vite@latest’.</li>
      </ul>

    </section>
  );
};

export default AboutPage;
