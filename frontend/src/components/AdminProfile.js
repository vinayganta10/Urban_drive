import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Mail, User, Shield } from 'lucide-react';
import '../Styles/AdminProfile.css';

const AdminProfile = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(localStorage.getItem("username") || "Admin");
    const [email, setEmail] = useState(localStorage.getItem("email") || "admin@example.com");
    const [role, setRole] = useState(localStorage.getItem("role") || "Administrator");
    const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "");

    useEffect(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);
        localStorage.setItem("profileImage", profileImage);
    }, [username, email, role, profileImage]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="admin-profile-container">
            <div className="admin-profile-card">
                <div className="admin-profile-header">
                    <h1 style={{ color: 'white' }}>Admin Profile</h1>
                </div>
                <div className="admin-profile-content">
                    <div className="admin-profile-image-container">
                        <div className="admin-profile-image">
                            {profileImage ? (
                                <img src={profileImage} alt="Admin Profile" />
                            ) : (
                                <div className="admin-profile-placeholder">
                                    <User size={64} />
                                </div>
                            )}
                        </div>
                        <label htmlFor="imageUpload" className="image-upload-label">
                            <Camera size={24} />
                            <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </div>
                    <div className="admin-profile-details">
                        <div className="admin-profile-field">
                            <User className="field-icon" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Admin Username"
                            />
                        </div>
                        <div className="admin-profile-field">
                            <Mail className="field-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Admin Email"
                            />
                        </div>
                        <div className="admin-profile-field">
                            <Shield className="field-icon" />
                            <input
                                type="text"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                placeholder="Admin Role"
                                readOnly
                            />
                        </div>
                    </div>
                </div>
                <div className="admin-profile-actions">
                    <button className="save-button" onClick={() => navigate('/admin')}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
