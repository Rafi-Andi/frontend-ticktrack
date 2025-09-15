<template>
  <div class="profile-container">
    <div class="profile-card">
      <h3>Profil Pengguna</h3>
      <div class="profile-info">
        <p><span>👤 Username:</span> contoh_user</p>
        <p><span>📧 Email:</span> contoh@example.com</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f8f9fa;
  font-family: 'Inter', sans-serif;
}

.profile-card {
  background: #fff;
  width: 100%;
  max-width: 380px;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.profile-card h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #2c3e50;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
}

.profile-info p {
  font-size: 15px;
  margin: 10px 0;
  color: #34495e;
  display: flex;
  align-items: center;
  gap: 8px;
}

.profile-info span {
  color: #7f8c8d;
  font-weight: 500;
}
</style>