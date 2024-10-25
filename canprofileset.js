function previewImage(event) {
    const reader = new FileReader();
    const profilePic = document.getElementById('profilePic');
    reader.onload = function() {
        if (reader.readyState === 2) {
            profilePic.src = reader.result;
        }
    }
    reader.readAsDataURL(event.target.files[0]);
}
function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const tagline = document.getElementById('tagline').value;
    const aboutMe = document.getElementById('aboutMe').value;
    const skills = document.getElementById('skills').value;
    const profileData = {
        name: name,
        email: email,
        phone: phone,
        tagline: tagline,
        aboutMe: aboutMe,
        skills: skills
    };
    console.log('Profile saved:', profileData);
    alert('Profile saved successfully!');
}
