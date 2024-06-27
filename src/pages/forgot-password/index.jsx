// import React, { useState } from 'react';

// const ForgotPassword = () => {
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // API chaqiruvini bu yerda amalga oshirishingiz mumkin
//         console.log('Password reset email sent to:', email);
//     };

//     return (
//         <div>
//             <h2>Forgot Password</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Email:
//                     <input 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)} 
//                         required 
//                     />
//                 </label>
//                 <button type="submit">Send Reset Link</button>
//             </form>
//         </div>
//     );
// };

// export default ForgotPassword;

import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://app.olimjanov.uz/v1/forgot-password', { email });
            setMessage('Password reset email sent successfully!');
        } catch (error) {
            setMessage('Error sending password reset email. Please try again.');
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;