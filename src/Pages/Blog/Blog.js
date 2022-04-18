import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <h2>1.Difference between authorization and authentication?</h2>
                <h4>**Authentication</h4>
                <p>1.Authentication verifies who the user is.</p>
                <p>2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>
                <p>3.Authentication is the first step of a good identity and access management process.</p>
                <p>4.Authentication is visible to and partially changeable by the user.</p>
                <p>5.Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>

                <h4>**Authorization</h4>
                <p>1.Authorization determines what resources a user can access.</p>
                <p>2.Authorization works through settings that are implemented and maintained by the organization.</p>
                <p>3.Authorization always takes place after authentication.</p>
                <p>4.Authorization isn’t visible to or changeable by the user.</p>
                <p>5.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>
            </div>
            <div className='my-5'>
                <h2>2.What other services does firebase provide other than authentication?</h2>
                <h4>##There are many services which Firebase provides, Most useful of them are</h4>
                <p>1.Cloud Firestore</p>
                <p>2.Cloud Functions</p>
                <p>3.Hosting</p>
                <p>4.Google Analytics</p>
                <p>5.Dynamic Links</p>
            </div>
        </div>
    );
};

export default Blog;