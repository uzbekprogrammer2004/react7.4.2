
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ResetPassword = () => {
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const { token } = useParams();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (password === confirmPassword) {
//             // API chaqiruvini bu yerda amalga oshirishingiz mumkin
//             console.log('Password reset with token:', token);
//         } else {
//             console.log('Passwords do not match');
//         }
//     };

//     return (
//         <div>
//             <h2>Reset Password</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     New Password:
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                     />
//                 </label>
//                 <label>
//                     Confirm Password:
//                     <input 
//                         type="password" 
//                         value={confirmPassword} 
//                         onChange={(e) => setConfirmPassword(e.target.value)} 
//                         required 
//                     />
//                 </label>
//                 <button type="submit">Reset Password</button>
//             </form>
//         </div>
//     );
// };

// export default ResetPassword;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const { token } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const response = await axios.post('https://app.olimjanov.uz/v1/reset-password', { token, password });
                setMessage('Password reset successfully!');
            } catch (error) {
                setMessage('Error resetting password. Please try again.');
            }
        } else {
            setMessage('Passwords do not match');
        }
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    Confirm Password:
                    <input 
                        type="password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit">Reset Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ResetPassword;