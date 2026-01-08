const gallery = document.getElementById("gallery");

let images = JSON.parse(localStorage.getItem("galleryImages")) || [];

// tampilkan foto saat halaman dibuka
window.onload = function () {
    images.forEach(src => addImageToGallery(src));
};

function addImage() {
    const input = document.getElementById("imageInput");

    if (!input.files || input.files.length === 0) {
        alert("Pilih foto dulu!");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        images.push(e.target.result);
        localStorage.setItem("galleryImages", JSON.stringify(images));
        addImageToGallery(e.target.result);
    };

    reader.readAsDataURL(file);
}

// fungsi untuk menampilkan foto
function addImageToGallery(src) {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "180px";
    img.style.margin = "10px";
    img.style.borderRadius = "10px";
    gallery.appendChild(img);
}
