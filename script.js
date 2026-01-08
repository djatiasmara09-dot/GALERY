const gallery = document.getElementById("gallery");

function addImage() {
    const input = document.getElementById("imageInput");

    if (!input.files || input.files.length === 0) {
        alert("Pilih foto dulu ya!");
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.style.width = "180px";
        img.style.margin = "10px";
        img.style.borderRadius = "10px";

        gallery.appendChild(img);
    };

    reader.readAsDataURL(file);
}
