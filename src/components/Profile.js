import "../index.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-card">
        <img 
          src="/profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <p><b>Full Name:</b> Tasmia</p>
          <p><b>Username:</b> @tasmia302</p>
          <p>
            <b>Bio:</b> Passionate writer who loves sharing ideas about 
            technology, creativity, and personal growth.
          </p>
          <p><b>Email:</b> tasmia@gmail.com</p>
          <p><b>Articles Published:</b> 15</p>
          <p><b>Date Joined:</b> Jan 1, 2024</p>
        </div>
      </div>
    </div>
  );
}
