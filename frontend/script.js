const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');

imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// For now, the button just alerts us - we will link this to the AI later!
document.getElementById('analyzeBtn').addEventListener('click', () => {
    alert("AI Model is being connected... stay tuned!");
});
