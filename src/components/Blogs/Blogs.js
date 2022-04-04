import React from 'react';
import "./Blog.css"

const Blogs = () => {
    return (
        <div>
            <h1 className='blog-head'>What is Context API?</h1>
            <div className='first-blog'>
                <p>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>
            </div>
            <h1 className='blog-head'>What is Semantic Tag?</h1>
            <div className='second-blog'>
                <p>
                    Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language.
                    There are many types of Symantic Tag.Such as
                    <div className='list-tag'>
                        <ul className='list'>
                            <li>header </li>
                            <li>aside</li>
                            <li>details</li>
                            <li>article</li>
                            <li>footer</li>
                        </ul>
                    </div>
                    There are many advantages of using Semantic Tag in HTML.
                    <ul className='list'>
                        <li>The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.</li>
                        <li>The pages made with semantic elements are much easier to read.</li>
                        <li>It has greater accessibility. It offers a better user experience.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;