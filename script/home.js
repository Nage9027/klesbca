const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
  ];
  
  let currentIndex = 0;
  const galleryImage = document.getElementById('gallery-image');
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
  }
  
  setInterval(changeImage, 3000); // Change image every 3 seconds