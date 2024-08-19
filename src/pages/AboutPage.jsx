import { VscBook, VscChecklist, VscSave, VscStarFull } from "react-icons/vsc";

const AboutPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-auto py-8">
      <div className="flex items-center mb-4">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to React</h1>
      </div>
      <ul className="text-xl mb-10 list-disc list-inside text-left max-w-4xl">
          React is a JavaScript library/framework for building user interfaces.
          It was created by Facebook.
          <li>React is currently the most popular out of the major front-end
          frameworks.</li>
      </ul>

      <div className="flex items-center mb-4">
        <VscChecklist className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Advantages of React</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        <li>
        React allows us to build very dynamic and interactive websites and user interfaces on the web.
        </li>
        <li>Very fast, especially with the new compiler.</li>
        <li>Best framework to learn to get a job because easy to learn specially if have good grasp on JavaScript, HTML and CSS.</li>
        <li>There is a huge ecosystem from Next.js to React Native (Mobile).</li>
        <li>Components are reusable.</li>
      </ul>

      <div className="flex items-center mb-4">
        <VscStarFull className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Key Features of React</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        <li>Component-based architecture,</li> 
        <li>Virtual DOM,</li> 
        <li>Declarative programming.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscStarFull className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React DOM</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        A package that provides DOM-specific methods that enable React to interact with the browser's Document Object Model (DOM).
        <li>Used in web applications to update the view layer in a performant way when the application state changes.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscStarFull className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">React Router</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
      React Router is a popular library in the React ecosystem used for handling routing in a React application. It enables developers to create dynamic, client-side routing, allowing users to navigate between different components or pages in a single-page application (SPA) without triggering a full page reload.
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to JavaScript</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
      JavaScript is a high-level and interpreted programming language. It is also a scripting language connects to ECMAScript. It is multi-paradigm meaning we can write the JS code in many different ways. JavaScript runs on the client/browser as well as on the server (Node.js). Uses-
        <li>It is the programming language of the browser.</li>
        <li>Build very interactive user interfaces with frameworks like React.</li>
        <li>Used in building very fast server-side and full stack applications.</li>
        <li>Used in mobile development (React Native, NativeScript, Ionic).</li>
        <li>Used in desktop application development (Electron JS).</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to Stripe.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        Stripe.js is a JavaScript library for integrating Stripe's payment processing capabilities into web applications. Features-
        <li>Secure and flexible payment methods,</li>
        <li>Support for various payment types (credit cards, digital wallets), and</li>
        <li>PCI compliance.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Uses of Stripe.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        <li>Used to handle payment processing</li>
        <li>Manage billing, and </li>
        <li>Handle transactions securely in web applications.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to Node.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        Node.js is an open-source JavaScript runtime built on the V8 JavaScript engine that Google Chrome uses. It is very fast, scalable and popular in many areas of the industry. Mostly used for developing server-side and networking apps/APIs. Key features-
        <li>Non-blocking architecture meaning uses event and callbacks instead of waiting to end operations.</li>
        <li>Single threaded environment and Event-driven architecture.</li>
        <li>Suitable for I/O-intensive tasks.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to Express.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
      Express.js is a minimal and flexible web application framework for Node.js. It is the most popular framework for Node.js. It is also a very fast and unopinionated framework. Use-
        <li>Mostly used to build server-side web apps, servers and RESTful APIs in Node.js applications.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscChecklist className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Key Features of Express.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        <li>Simplifies the process of handling HTTP requests and responses.</li>
        <li>Simplifies the process of building server-side applications and APIs.</li> 
        <li>Provides robust routing.</li> 
        <li>Provides middleware integration.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscBook className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Introduction to Next.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
      Next.js is a React frontend development web framework created by ‘Vercel’ for server-side rendered or statically exported (generated) React applications. Use-
        <li>Ideal for building fast, scalable web applications with React, using features like SEO optimization and improved performance.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscChecklist className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">Key Features of Next.js</h1>
      </div>
      <ul className="text-xl list-disc list-inside text-left max-w-4xl">
        <li>Server-Side Rendering,</li>
        <li>Static Site Generation (next export),</li> 
        <li>Automatic code splitting,</li> 
        <li>API Routes,</li>
        <li>Out of the box TypeScript & Sass,</li>
        <li>Easy deployment.</li>
      </ul>

      <div className="flex items-center mb-4 mt-8">
        <VscSave className="text-black text-4xl mr-4" />
        <h1 className="text-4xl font-bold">The End</h1>
      </div>

    </section>
  );
};

export default AboutPage;