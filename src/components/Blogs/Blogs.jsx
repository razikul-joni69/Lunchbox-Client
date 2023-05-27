import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
    const propTypes = `import PropTypes from 'prop-types';
                        function Greeting(props) {
                        return (
                            <div>
                            <h1>Hello, {props.name}</h1>
                            <p>{props.message}</p>
                            </div>
                        )}

                        Greeting.propTypes = {
                        name: PropTypes.string.isRequired,
                        message: PropTypes.string.isRequired
                        }`;

    const options = {
        orientation: "landscape",
        unit: "in",
        format: [12, 8],
    };

    return (
        <div className="container mx-auto my-8 space-y-10">
            <Pdf
                targetRef={ref}
                filename="blogs.pdf"
                options={options}
                x={0.5}
                y={0.5}
                scale={0.8}
            >
                {({ toPdf }) => (
                    <button className="btn" onClick={toPdf}>
                        Generate As Pdf
                    </button>
                )}
            </Pdf>
            <div ref={ref}>
                <div>
                    <h2 className="text-2xl">
                        What is the differences between uncontrolled and
                        controlled components?
                    </h2>
                    <p>
                        In React, there are two types of components: controlled
                        components and uncontrolled components. Controlled
                        components are those that have their state and behavior
                        controlled by the parent component. Uncontrolled
                        components, on the other hand, manage their own state
                        internally. Here is some key differneces:
                        <li>
                            Controlled components use props to pass the current
                            value and an update callback to the parent
                            component. The parent component then manages the
                            state of the component and updates the value when
                            the user interacts with it.
                        </li>
                        <li>
                            Uncontrolled components maintain their own internal
                            state. When the user interacts with the component,
                            it updates its own state, which in turn updates the
                            value.
                        </li>
                        <li>
                            Controlled components are more predictable and
                            easier to debug. This is because the parent
                            component has complete control over the state of the
                            component.
                        </li>
                        <li>
                            Uncontrolled components can be slightly faster than
                            controlled components. This is because the parent
                            component does not need to update the state of the
                            component when the user interacts with it.
                        </li>
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl">
                        How to validate React props using PropTypes?
                    </h2>
                    <p>
                        PropTypes is a powerful tool that can help you to
                        improve the quality of your React applications. By using
                        PropTypes, you can catch errors early and prevent them
                        from causing problems in your code. PropTypes can help
                        you to catch errors early in the development process,
                        before they cause problems in your application.PropTypes
                        can help you to improve the quality of your code by
                        making it more robust and easier to maintain. PropTypes
                        can help you to reduce the number of bugs in your
                        application by catching errors early. Here is the
                        example and use of PropTypes :
                    </p>
                    <code>{propTypes}</code>
                    <p>
                        In the above example, we are using PropTypes to validate
                        that the name and message props passed to the Greeting
                        component are strings. The isRequired property is used
                        to indicate that the prop is required.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl">
                        What is the difference between nodejs and express js?
                    </h2>
                    <p>
                        Node.js and Express.js are both open-source technologies
                        that are used to build web applications. However, they
                        serve different purposes. Node.js is a runtime
                        environment that allows you to run JavaScript code
                        outside of a browser. It is based on the Chrome V8
                        JavaScript engine and uses an event-driven, non-blocking
                        I/O model. This makes it ideal for building scalable web
                        applications that can handle a high volume of requests.
                        Express.js is a web application framework that is built
                        on top of Node.js. It provides a number of features that
                        make it easy to build web applications, such as routing,
                        middleware, and template engines. Express.js is a
                        popular choice for building web applications because it
                        is lightweight, flexible, and easy to use. In short,
                        Node.js is a runtime environment that allows you to run
                        JavaScript code outside of a browser, while Express.js
                        is a web application framework that is built on top of
                        Node.js.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl">
                        What is a custom hook, and why will you create a custom
                        hook?
                    </h2>
                    <p>
                        Custom hooks are special JavaScript function whose name
                        starts with “use” and can be used to call other hooks.
                        Custom hooks are used to reuse stateful logic between
                        components. They are a mechanism to share logic between
                        components and must be named starting with “use”
                        followed by a capital letter. Custom hooks only share
                        stateful logic, not state itself. You can pass reactive
                        values from one hook to another, and they stay
                        up-to-date. All hooks re-run every time your component
                        re-renders.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
